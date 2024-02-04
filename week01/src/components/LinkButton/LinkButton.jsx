import "./LinkButton.css";

function LinkButton({ className, ariaLabel, href, children, style }) {
  return (
    <a className={className} aria-label={ariaLabel} href={href} style={style}>
      {children}
    </a>
  );
}

export default LinkButton;
