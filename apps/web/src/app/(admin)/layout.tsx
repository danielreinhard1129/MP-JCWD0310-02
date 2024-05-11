export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div id="header">Header organizer header</div>
      {children}
      <div id="footer"><p>Footer organizer register</p></div>
    </>
  );
}
