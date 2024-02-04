import "./LinkButton.css";

function LinkButton({ className, ariaLabel, href, children }) {
  return (
    <a className={className} aria-label={ariaLabel} href={href}>
      {children}
    </a>
  );
}

export default LinkButton;
