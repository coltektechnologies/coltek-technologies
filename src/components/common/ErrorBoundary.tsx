import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

// Catches render-time errors anywhere below it in the tree (including a
// lazy-loaded page whose chunk failed to import) and shows a recoverable
// screen instead of leaving <div id="root"> empty.
class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, info);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#070C29] text-white px-4">
          <div className="text-center max-w-md">
            <h1 className="text-2xl font-bold mb-3">Something went wrong</h1>
            <p className="text-gray-300 mb-6">
              This page couldn&apos;t load properly. This usually happens after
              a new update — reloading will fetch the latest version.
            </p>
            <button
              onClick={this.handleReload}
              className="px-6 py-3 font-semibold rounded-lg bg-gradient-to-r from-[#1c3D72] to-[#2EC4B6] text-white transition-all duration-300 hover:shadow-lg"
            >
              Reload page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
