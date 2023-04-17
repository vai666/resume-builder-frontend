interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="h-screen bg-white">
            <div>
                {children}
            </div>
        </div>
    )
};

export default Layout;