"use client";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { PaginationControl } from "@workspace/ui/components/pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { RecipeListFilters } from "./types";

export const RecipeFilters = ({
  children,
  totalPages = 0,
  filters,
}: {
  children: React.ReactNode;
  totalPages?: number;
  filters: RecipeListFilters;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(filters.search || "");
  const onChangeSearchParams = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set(key, value);
    router.push(`${pathname}?${newParams.toString()}`);
  };
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
              onChangeSearchParams("search", search);
            }}
          >
            Search
          </Button>
        </div>
      </div>
      {children}
      <PaginationControl
        totalPages={totalPages}
        currentPage={filters.page}
        onPageChange={(page) => onChangeSearchParams("page", page.toString())}
      />
    </div>
  );
};
