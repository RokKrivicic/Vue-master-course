import { render, screen } from "@testing-library/vue";

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
});
