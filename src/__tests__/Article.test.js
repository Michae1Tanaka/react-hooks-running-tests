import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

function Article(props){
  return <div>please pass this test</div>
}

test("displays the text 'please pass this test'", () => {
  render(<Article />);
  const element = screen.queryByText("please pass this test")
  screen.debug(element)
  expect(screen.queryByText("please pass this test")).toBeInTheDocument();
});
