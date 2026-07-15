import { ErrorBoundary, type FallbackProps } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
    return (
        <div role="alert">
            <p>Oops! Something went wrong:</p>
            <pre>{error instanceof Error && error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    );
}

export default function ErrorBoundaryWrapper({ children } : React.PropsWithChildren) {
    return (
        <>
            {/* FallbackComponent ki jagah fallbackRender use karo, isse TS2607 completely fix ho jayega */}
            <ErrorBoundary fallbackRender={ErrorFallback}>
              {children}
            </ErrorBoundary>
        </>
    );
}


//  
