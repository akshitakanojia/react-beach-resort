import React,{Component} from 'react'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'
import Title from './Title'

class Services extends Component{
	state={
		services:[
		{
			icon:<FaCocktail/>,
			title:"Free cocktails",
			info:'Lorem ipsum dolor sit amet consectetur adipiscing elit. Mgni,corporis!'
		},
		{
			icon:<FaHiking/>,
			title:"Endless Hiking",
			info:'Lorem ipsum dolor sit amet consectetur adipiscing elit. Mgni,corporis!'
		},
		{
			icon:<FaShuttleVan/>,
			title:"free shuttle",
			info:'Lorem ipsum dolor sit amet consectetur adipiscing elit. Mgni,corporis!'
		},
		{
			icon:<FaBeer/>,
			title:"Stringest Beer",
			info:'Lorem ipsum dolor sit amet consectetur adipiscing elit. Mgni,corporis!'
		}
		]
	}
	render(){
		return(
			<section className='services'>
				<Title title='services'/>
				<div className="services-center">
					{this.state.services.map((item,index)=>{
						return <article key={index} className="service">
							<span>{item.icon}</span>
							<h6>{item.title}</h6>
							<p>{item.info}</p>
						</article>
					})}
				</div>
			</section>
		)
	}
}

export default Services