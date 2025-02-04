import { render, screen } from "@testing-library/react";
import { Button } from "@workspace/ui/components/button";

describe("Button Component", () => {
  it("renders the button with label", () => {
    render(<Button onClick={() => {}}>Click Me</Button>);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });
});
