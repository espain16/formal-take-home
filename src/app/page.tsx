import RecentViewedDash from "@/components/RecentViewedDash";
import SavedScrollArea from "@/components/SavedScrollArea";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <div>
      <div className="search-bar">
        <SearchBar />
      </div>
      <div className="recent-dashboard">
        <RecentViewedDash />
      </div>
      <div className="saved-scroll-area">
        <SavedScrollArea />
      </div>
    </div>
  );
}
