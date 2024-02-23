"use client";
import * as React from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  Workflow,
  KeyRound,
  ScrollText,
  Eye,
  FolderClosed,
  Sigma,
  Gauge,
  User,
  Waypoints,
  Shuffle,
  UserRoundCheck,
  AlertTriangle,
} from "lucide-react";

export default function SearchBar() {
  const [open, setOpen] = React.useState(false);
  return (
    <Command>
      <button onClick={() => setOpen(true)}>
        <CommandInput placeholder="Search for anything" />
        <CommandItem>
          <CommandShortcut>⌘E</CommandShortcut>
        </CommandItem>
      </button>
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="DATA">
          <CommandItem className="data-search-items">
            <FolderClosed className="bg-[707EE9]" />
            <span className="data-item-title ml-1 mr-4">Catalog</span>
            <span className="">Description of application</span>
            <CommandShortcut>⌥C</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Eye />
            <span className="data-item-title ml-1 mr-4">Observability</span>
            <span>Description of application</span>
            <CommandShortcut>⌥O</CommandShortcut>
          </CommandItem>
          <CommandItem className="data-search-items">
            <Waypoints />
            <span className="data-item-title ml-1 mr-4">Lineage</span>
            <span>Description of application</span>
            <CommandShortcut>⌥E</CommandShortcut>
          </CommandItem>
          <CommandItem className="data-search-items">
            <Shuffle />
            <span className="data-item-title ml-1 mr-4">ETL</span>
            <span>Description of application</span>
            <CommandShortcut>⌥L</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="SECURITY">
          <CommandItem>
            <UserRoundCheck />
            <span className="security-item-title ml-1 mr-4">Access</span>
            <span>Description of application</span>
            <CommandShortcut>⌥A</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <AlertTriangle />
            <span className="security-item-title ml-1 mr-4">Logs</span>
            <span>Description of application</span>
            <CommandShortcut>⌥G</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Gauge />
            <span className="security-item-title ml-1 mr-4">Discovery</span>
            <span>Description of application</span>
            <CommandShortcut>⌥D</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <ScrollText />
            <span className="security-item-title ml-1 mr-4">Policies</span>
            <span>Description of application</span>
            <CommandShortcut>⌥P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Gauge />
            <span className="security-item-title ml-1 mr-4">Compliances</span>
            <span>Description of application</span>
            <CommandShortcut>⌥Q</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="STORE"></CommandGroup>
        <CommandGroup heading="TOOLS">
          <CommandItem>
            <KeyRound />
            <span className="tools-item-title ml-1 mr-4">API Keys</span>
            <span>Description of application</span>
            <CommandShortcut>⌥Q</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Sigma />
            <span className="tools-item-title ml-1 mr-4">Sigma</span>
            <span>Description of application</span>
            <CommandShortcut>⌥S</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Workflow />
            <span className="tools-item-title ml-1 mr-4">Sigma</span>
            <span>Description of application</span>
            <CommandShortcut>⌥W</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
