import React from "react";
import { useSelector } from "react-redux";
import ComboItem from "../../items/ComboItem";
import OffersItem from "../../items/OffersItem";

function Section2(){
    
    const lang = useSelector(state => state.language)
    const allProducts = useSelector(state=>state.products)
    const allCombos = allProducts.filter(item=>item.type==='COMBO')
    const allPackages = allProducts.filter(item=>item.type==='PACKAGE')

    return(
        <div className="section2">
        <div className="section2-inner">
            <div className="s2-menu-border"></div>
            <div className="s2-head">
                <div className="s2-head-left">
                    <div className="s2-head-left-small">{lang.menu.section2title}</div>
                    <div className="s2-head-left-big">{lang.menu.section2bold}</div>
                    <div className="s2-head-left-description">{lang.menu.section2thin}</div>
                </div>
            </div>
            <div className="s2-next-menu">
                <div className="s2-menu-left">
                    <div className="s2-menu-left-icon">01</div>
                    <div className="s2-menu-left-text">
                        <div className="s2-menu-left-text-big">{lang.menu.section2step1_title}</div>
                        <div className="s2-menu-left-text-small">{lang.menu.section2step1_desc}</div>
                    </div>
                </div>
            </div>
            <div className="menu-s2-daily">
                <ul>
                    <li className="menu-s2-daily-item active">
                        <div className="menu-s2-daily-day">Crazy Monday</div>
                        <div className="menu-s2-daily-description">Jede Pasta</div>
                        <div className="menu-s2-daily-price">€ 6.00</div>       
                    </li>
                    <li className="menu-s2-daily-item">
                        <div className="menu-s2-daily-day">Tipsy Tuesday</div>
                        <div className="menu-s2-daily-description">Jede Pizza verbilligt um</div>
                        <div className="menu-s2-daily-price">€ 1.50</div>       
                    </li>
                    <li className="menu-s2-daily-item">
                        <div className="menu-s2-daily-day">Freaky Wednesday</div>
                        <div className="menu-s2-daily-description">Spare Ribs</div>
                        <div className="menu-s2-daily-price">€ 10.00</div>       
                    </li>
                    <li className="menu-s2-daily-item">
                        <div className="menu-s2-daily-day">Meaty Friday</div>
                        <div className="menu-s2-daily-description">Schnitzel + Pommes</div>
                        <div className="menu-s2-daily-price">€ 7.50</div>       
                    </li>
                </ul>
            </div>
            <div className="s2-menu-right-again">
                <div className="s2-menu-right-icon">02</div>
                <div className="s2-menu-right-text">
                    <div className="s2-menu-right-text-big">{lang.menu.section2step2_title}</div>
                    <div className="s2-menu-right-text-small">{lang.menu.section2step2_desc}</div>
                </div>
            </div>
           <div className="s2-menu-border-again"></div>
            <div className="s2-combo-items">


            {allCombos && 
                    allCombos.map((item,index) => (
                        <ComboItem item={item} index={index+1}/>

                    ))
                }
    
            </div>
            <div className="s2-menu-left-again">
                <div className="s2-menu-left-icon">03</div>
                <div className="s2-menu-left-text">
                    <div className="s2-menu-left-text-big">{lang.menu.section2step3_title}</div>
                    <div className="s2-menu-left-text-small">{lang.menu.section2step3_desc}</div>
                </div>
            </div>
            <div className="s2-items">
                <ul>
                {allPackages && 
                    allPackages.map((item,index) => (
                        <OffersItem item={item} index={index+1}/>))
                }
                </ul>
            </div>
        </div>
    </div>
    );
}

export default Section2;