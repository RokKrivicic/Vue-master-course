import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";

import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("displays company name", () => {
    render(MainNav);
    const companyName = screen.getByText("Rok Careers");
    expect(companyName).toBeInTheDocument();
  });

  it("display items for navigation", () => {
    render(MainNav);
    const navigationItems = screen.getAllByRole("listitem");
    const navigationItemsText = navigationItems.map((item) => item.textContent);
    expect(navigationItemsText).toEqual([
      "Teams",
      "Locations",
      "Life at Rok Carrers",
      "How we hire",
      "Students",
      "Jobs",
    ]);
  });

  describe(" when the user logs in", () => {
    it("displays user profile pictures", async () => {
      render(MainNav);
      let profileImage = screen.queryByRole("img", {
        name: /User profile image/i,
      });
      expect(profileImage).not.toBeInTheDocument();

      const loginButton = screen.getByRole("button", {
        name: /sign in/i,
      });
      await userEvent.click(loginButton);

      profileImage = screen.getByRole("img", {
        name: /User profile image/i,
      });
      expect(profileImage).toBeInTheDocument();
    });
  });
});
