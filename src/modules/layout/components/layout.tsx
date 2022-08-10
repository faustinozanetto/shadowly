import React from 'react';
import LayoutHead from './layout-head';

interface ILayoutProps {
  children?: React.ReactNode;
  headProps?: React.ComponentPropsWithoutRef<typeof LayoutHead>;
}

const Layout: React.FC<ILayoutProps> = (props) => {
  const { children, headProps } = props;

  return (
    <div className="flex flex-col min-h-screen font-poppins bg-gradient-to-r from-purple-400 to-yellow-400 overflow-hidden subpixel-antialiased transition-all">
      {/* Head */}
      <LayoutHead {...headProps} />

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 sm:px-6 md:px-8">
        <main className="max-w-xl mx-auto w-full">
          {/* Children */}
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
