export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div id="header">
        <p>Header authentication</p>
      </div>
      {children}
      <div id="footer">Footer authentication</div>
    </>
  );
}
