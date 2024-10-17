export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 - Сторінку не знайдено</h1>
      <p>На жаль, сторінка, яку ви шукаєте, не існує.</p>
      <a href="/" style={{ color: "#0070f3", textDecoration: "underline" }}>
        Повернутися на головну сторінку
      </a>
    </div>
  );
}
