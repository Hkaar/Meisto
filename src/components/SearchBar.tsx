import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { type ChangeEvent, useState } from "react";
import { Filter, Search, SortDesc } from "lucide-react";

interface SearchBarProps {
  className?: string;
  searchUrl: string;
  placeholder: string;
}

function SearchBar(props: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div
      className={cn(
        "py-4 bg-background border-b border-gray-200 dark:border-neutral-700",
        props.className,
      )}
    >
      <div className="container flex items-center justify-between">
        <div className="relative w-1/3">
          <Input
            type="text"
            placeholder={props.placeholder}
            className="w-full ps-8"
          />
          <div className="absolute inset-y-2.5 start-0 ps-2">
            <Search className="size-4" size={18} />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button>
            <Search />
            Search
          </Button>
          <Button variant={"secondary"}>
            <SortDesc />
            Sort
          </Button>
          <Button variant={"secondary"}>
            <Filter />
            Show filters
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
