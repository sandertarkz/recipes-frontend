"use client";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export const RecipeFilters = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");

  return (
    <div>
      <div className="flex justify-end mb-4">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            className=""
            onClick={() => {
              const newParams = new URLSearchParams(searchParams.toString());
              newParams.set("search", search);
              router.push(`${pathname}?${newParams.toString()}`);
            }}
          >
            Search
          </Button>
        </div>
      </div>

      {children}
    </div>
  );
};
