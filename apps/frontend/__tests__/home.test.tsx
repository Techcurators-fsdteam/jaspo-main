import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home Page", () => {
  it("renders Hello World text", () => {
    render(<Home />);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
});
