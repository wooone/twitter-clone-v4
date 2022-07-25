import Image from "next/image"
import SidebarMenuItem from "./SidebarMenuItem"
import { HomeIcon } from "@heroicons/react/solid"
import { BellIcon, BookmarkIcon, ClipboardIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon, HashtagIcon, InboxIcon, UserIcon } from "@heroicons/react/outline"

export default function Sidebar() {
	return (
		<div>
			{/* Twitter Lgo */}
			<div className="hoverEffect">
				<Image width="38px" height="30px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png" alt="Twitter-Logo"></Image>
			</div>
			{/* Menu */}
			<div className="">
				<SidebarMenuItem text="Home" Icon={HomeIcon} active />
				<SidebarMenuItem text="Explore" Icon={HashtagIcon} />
				<SidebarMenuItem text="Notifications" Icon={BellIcon} />
				<SidebarMenuItem text="Messages" Icon={InboxIcon} />
				<SidebarMenuItem text="Bookmark" Icon={BookmarkIcon} />
				<SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
				<SidebarMenuItem text="Profile" Icon={UserIcon} />
				<SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
			</div>

			{/* Button */}

			<button>Tweet</button>

			{/* Mini-Profile */}

			<div className="hoverEffect">
				<img src="/images/anya.png" alt="User-image" />
				<div className="">
					<h4>Yan-Yu Wang</h4>
					<p>@yanyuwang</p>
				</div>
				<DotsHorizontalIcon className="h-5" />
			</div>

		</div>
	)
}
