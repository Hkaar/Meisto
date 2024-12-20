import { cn } from "@/lib/utils";

import React from "react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ThemeToggle from "@/components/ThemeToggle";
import {
  Command as CommandIcon,
  Compass,
  Cookie,
  Globe,
  MessageCircleQuestion,
  NotepadText,
} from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Github } from "./icons";

interface Props {
  className?: string;
}

type SubMenu = {
  icon?: React.ReactNode;
  title: string;
  description: string;
  link: string;
  target?: string;
};

const recipeSubMenus: SubMenu[] = [
  {
    icon: <Compass className="size-4" />,
    title: "Browse",
    description:
      "Browse the catalogue of cooking recipes that we provided for you to use",
    link: "/recipes",
  },
  {
    icon: <NotepadText className="size-4" />,
    title: "Collections",
    description:
      "Explore our collections of recipes that are related to one another",
    link: "/recipes/collections",
  },
];

const communitySubMenus: SubMenu[] = [
  {
    icon: <MessageCircleQuestion className="size-4" />,
    title: "FAQ",
    description: "See our most commonly asked questions about Meisto",
    link: "/community/faq",
  },
  {
    icon: <Github className="size-4" />,
    title: "Github",
    description: "Help us out, by contibuting to the project on github",
    link: "https://github.com/Hkaar/Meisto",
    target: "_blank",
  },
];

export default function Header(props: Props) {
  const [searchOpen, setSearchOpen] = useState(false);

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === "k") {
      event.preventDefault();
      setSearchOpen(true);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <header
      className={cn(
        "w-full px-4 py-3 border-b bg-background border-gray-200 dark:border-neutral-700 sticky top-0 z-40",
        props.className,
      )}
    >
      <div className="flex items-center justify-between container">
        <div className="flex items-center gap-3">
          <h1 className="font-bold tracking-tighter text-2xl">
            Meisto
          </h1>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  href="/"
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Recipes</NavigationMenuTrigger>

                <NavigationMenuContent>
                  <ul className="p-4 md:w-[400px] lg:w-[500px] grid grid-cols-2 gap-3">
                    <li className="row-span-3">
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <Cookie className="h-6 w-6" />

                        <div className="mb-2 mt-4 text-lg font-medium">
                          Recipes
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Recipes that we curated and serve to you
                        </p>
                      </a>
                    </li>
                    {recipeSubMenus.map((menu) => (
                      <ListItem
                        target={menu.target}
                        key={menu.title}
                        icon={menu.icon}
                        title={menu.title}
                        href={menu.link}
                      >
                        {menu.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Community</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="p-4 md:w-[400px] lg:w-[500px] grid grid-cols-2 gap-3">
                    <li className="row-span-3">
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <Globe className="h-6 w-6" />

                        <div className="mb-2 mt-4 text-lg font-medium">
                          Community
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Check out the communities that are related to us!
                        </p>
                      </a>
                    </li>
                    {communitySubMenus.map((menu) => (
                      <ListItem
                        target={menu.target}
                        key={menu.title}
                        icon={menu.icon}
                        title={menu.title}
                        href={menu.link}
                      >
                        {menu.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant={"outline"}
            className="flex items-center gap-5"
            onClick={() => setSearchOpen(true)}
          >
            <span className="text-sm text-gray-500 dark:text-neutral-600">
              Search website...
            </span>

            <Badge
              className="p-1 flex items-center gap-2 text-gray-700 dark:text-neutral-300"
              variant={"outline"}
            >
              <CommandIcon className="size-4" />
              CTRL+K
            </Badge>
          </Button>

          <ThemeToggle />
        </div>
      </div>

      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogContent hideClose className="p-0">
          <Command className="rounded-lg md:min-w-[450px]">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>
                  <Compass />
                  <span>Browse recipes</span>
                </CommandItem>
                <CommandItem>
                  <NotepadText />
                  <span>See collections</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Other">
                <CommandItem>
                  <MessageCircleQuestion />
                  <span>Check out our FAQ</span>
                </CommandItem>
                <CommandItem>
                  <Github />
                  <span>Checkout our github</span>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </header>
  );
}

type ListItemProps = React.ComponentPropsWithoutRef<"a"> & {
  icon?: React.ReactNode;
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  ListItemProps
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="flex items-center gap-2">
            {icon}
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>

          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
