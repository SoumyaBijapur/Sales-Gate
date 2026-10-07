import { useState } from "react";
import BookDemoModal from "./BookDemoModal";

function DemoButton({
  children = "Book a Demo",
  className = "",
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <a
        href="#"
        className={className}
        onClick={(event) => {
          event.preventDefault();
          setIsOpen(true);
        }}
      >
        {children}
      </a>

      <BookDemoModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}

export default DemoButton;