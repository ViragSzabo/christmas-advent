import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { SocialShare } from "../components/SocialShare";

// Mock react-share since it's a third-party library
jest.mock("react-share", () => ({
  FacebookShareButton: ({ children }) => <div>{children}</div>,
  TwitterShareButton: ({ children }) => <div>{children}</div>,
  WhatsappShareButton: ({ children }) => <div>{children}</div>,
}));

describe("SocialShare", () => {
  const shareUrl = "https://example.com";
  test("renders social media buttons", () => {
    render(<SocialShare shareUrl={shareUrl} />);

    // Check if the share buttons are rendered
    expect(screen.getByText(/spread the holiday cheer/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /facebook/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /twitter/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /whatsapp/i })).toBeInTheDocument();
  });
});