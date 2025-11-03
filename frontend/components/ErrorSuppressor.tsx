"use client";

import { useEffect, useState } from "react";

export function ErrorSuppressor() {
  const [lastError, setLastError] = useState<string | null>(null);
  const [errorCount, setErrorCount] = useState(0);
  useEffect(() => {
    // Store original methods
    const originalError = console.error.bind(console);
    const originalWarn = console.warn.bind(console);

    // Override console.error
    console.error = (...args: any[]) => {
      const message = String(args[0] || '');
      const fullMessage = args.map(arg => String(arg)).join(' ');

      // Count all errors (before suppression)
      setErrorCount(prev => prev + 1);

      // Suppress Base Account SDK COOP warnings (non-critical, FHEVM requires COOP header)
      if (message.includes('Base Account SDK requires the Cross-Origin-Opener-Policy') ||
          fullMessage.includes('Base Account SDK requires the Cross-Origin-Opener-Policy')) {
        return;
      }

      // Suppress "Failed to fetch" errors from Analytics SDK or relayer
      if (message === 'Failed to fetch' || fullMessage.includes('Failed to fetch')) {
        // Check stack trace to see if it's from Analytics SDK or relayer
        const errorObj = args.find(arg => arg instanceof Error);
        const stack = errorObj?.stack || '';
        if (stack.includes('Analytics SDK') ||
            stack.includes('relayer') ||
            stack.includes('@base-org') ||
            stack.includes('cca-lite.coinbase.com') ||
            stack.includes('relayer-sdk-js') ||
            stack.includes('relayer.testnet.zama.cloud')) {
          return;
        }
      }

      // Suppress network resource errors
      if (message.includes('Failed to load resource') &&
          (message.includes('cca-lite.coinbase.com') ||
           message.includes('relayer.testnet.zama.cloud'))) {
        return;
      }

      // Suppress Coinbase Analytics errors
      if (message.includes('Analytics SDK') ||
          fullMessage.includes('Analytics SDK') ||
          message.includes('cca-lite.coinbase.com')) {
        return;
      }

      // Store last non-suppressed error for display
      setLastError(message);
      originalError(...args);
    };

    // Override console.warn
    console.warn = (...args: any[]) => {
      const message = String(args[0] || '');
      const fullMessage = args.map(arg => String(arg)).join(' ');
      
      // Suppress Base Account SDK warnings
      if (message.includes('Base Account SDK') || fullMessage.includes('Base Account SDK')) {
        return;
      }
      
      originalWarn(...args);
    };

    // Catch unhandled errors
    const errorHandler = (event: ErrorEvent) => {
      const message = event.message || '';
      if (message.includes('Base Account SDK requires the Cross-Origin-Opener-Policy') ||
          message.includes('Analytics SDK')) {
        event.preventDefault();
        return false;
      }
    };

    // Catch unhandled promise rejections
    const rejectionHandler = (event: PromiseRejectionEvent) => {
      const reason = String(event.reason || '');
      if (reason.includes('Base Account SDK') ||
          reason.includes('Analytics SDK') ||
          reason.includes('Failed to fetch') ||
          reason.includes('ERR_CONNECTION_CLOSED') ||
          reason.includes('relayer.testnet.zama.cloud')) {
        event.preventDefault();
        return false;
      }
    };

    window.addEventListener('error', errorHandler, true);
    window.addEventListener('unhandledrejection', rejectionHandler);

    return () => {
      // Restore original methods on cleanup
      console.error = originalError;
      console.warn = originalWarn;
      window.removeEventListener('error', errorHandler, true);
      window.removeEventListener('unhandledrejection', rejectionHandler);
    };
  }, []);

  // Only show error UI in development
  if (process.env.NODE_ENV !== 'development' || errorCount === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <div className="bg-red-50 border border-red-200 rounded-lg p-3 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-red-800">
              Errors Suppressed: {errorCount}
            </span>
          </div>
          <button
            onClick={() => setErrorCount(0)}
            className="text-red-600 hover:text-red-800 text-sm"
          >
            ✕
          </button>
        </div>
        {lastError && (
          <div className="mt-2 text-xs text-red-700 truncate">
            Last: {lastError}
          </div>
        )}
      </div>
    </div>
  );
}

