import { ReactNode } from "react";


export default function Container ({ children }: { children: ReactNode }) {
    return (
        <div className="w-full max-w-screen-xl mx-auto px-3">
            {children}
        </div>
    )
}