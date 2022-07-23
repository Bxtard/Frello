import React from "react"
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import ToDo from "../../components/TodoCards"
const MainBoard= () => {
return(
<div>
	<NavBar/>
	<div className="mainBoard">
		<header className="headerBoard">
		<input className="nameBoard"  type="text" placeholder=" Tittle"/>
		<a  href="/"> <img className="iconsBoard" src="..\img\star-regular.png" alt=""/></a>
		<a  href="/">Workspace's name</a>
		<a  href="/"><img className="iconsBoard" src="..\img\users-solid.png" alt="" /> Workspace visible</a>
		<a  href="/"><img className="iconsBoard" src="..\img\share-square-solid.png" alt="" />  Share</a>
		<a  href="/"><img className="iconsBoard" src="..\img\filter-solid.png" alt="" />  Filter</a>
		<a  href="/"><img className="iconsBoard" src="..\img\ellipsis-h-solid.png" alt="" />   Show menu</a>
		</header>
	</div>

	<div className="workSpace">
		<div class="list">
			<div className="ToDo__columns">
				<div>
					<ToDo/>
				</div>
				<div>
					<ToDo/>
				</div>
				<div>
					<ToDo/>
				</div>
			</div>
		</div>
	</div>

	<Footer/>
</div>
)
}

export default MainBoard;