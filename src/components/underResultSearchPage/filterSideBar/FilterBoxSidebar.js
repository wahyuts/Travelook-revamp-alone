import React,{useState} from 'react';
import '../../../css/Font.css'

//MaT UI Stuff
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from "@material-ui/core/Divider";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Collapse from "@material-ui/core/Collapse";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme=>({
  sidebarr:{
    position: 'relative',
    left:'2.5%',
    fontFamily: 'Mulish,sans-serif',
    fontWeight: 700,
    marginBottom: 48,
    marginRight: 20,
    width:'100%',
    // height:'53vw',
    // [theme.breakpoints.down('xl')]: {
    //   height:'43vw',
    // },
    // [theme.breakpoints.up('fullHD')]: {
    //   height:'37vw',
    // },
    // height: 700,
    borderRadius: 16,
    backgroundColor:'#FFFFFF'
  },
  fontSizeFilterbar:{
    fontSize:20,
  },
  sidebarItemContent:{
      width:'100%',
  },
  // sidebarItem:{
  //   borderBottom: '1px solid #EFEFF4'
  // },
  sidebarItemText:{
    width:'95%',
    paddingLeft:'5%',
    paddingtop:'2%',
    paddingBottom:'2%',
    marginTop:'2%',
  },
  
}))

function SidebarItem({ depthStep = 10, depth = 0, expanded, item, ...rest }) {
    const classes = useStyles();
    const [collapsed, setCollapsed] = useState(true);
    const { label, items, Icon, onClick: onClickProp } = item;

    function toggleCollapse() {
        // setCollapsed(prevValue => false);
        setCollapsed(prevValue => !prevValue);
    }

    function onClick(e) {
        if (Array.isArray(items)) {
        toggleCollapse();
        }
        if (onClickProp) {
        onClickProp(e, item);
        }
    }

    let expandIcon;

    // *****************untuk menu icon panah atas bawah drop dwon filter******************************

    if (Array.isArray(items) && items.length) {
        expandIcon = !collapsed ? (
        <ExpandLessIcon
             
        />
        ) : (
        <ExpandMoreIcon />
        );
    }

    //******************************************************************************* */

    return (
        <>
          <ListItem
            className={classes.sidebarItem}
            onClick={onClick}
            // button
            dense
            {...rest}
          >
            <div
              style={{ paddingLeft: depth * depthStep }}
              className={classes.sidebarItemContent}
            >
              {Icon && <Icon />}
              <div className={classes.sidebarItemText}>{label}</div>
              {/* <div>hahaha</div> */}
            </div>
            {expandIcon}
          </ListItem>
          <Collapse in={collapsed} timeout="auto" unmountOnExit> 
            {Array.isArray(items) ? (
              <List disablePadding dense>
                {
                items.map((subItem, index) => (
                  <React.Fragment key={`${subItem.name}${index}`}>
                    {subItem === "divider" ? (
                      <Divider style={{ margin: "6px 0" }} />
                    ) 
                    : (
                      <SidebarItem
                        depth={depth + 1}
                        depthStep={depthStep}
                        item={subItem}
                      />
                    )
                    }
                  </React.Fragment>
                ))}
              </List>
            ) 
            : null}
          </Collapse>
        </>
      );
    }
//**************************END FUNCTION sidebarItem***************************************************** */


function FilterBoxSidebar ({ items, depthStep, depth, expanded}) {
    const classes = useStyles();
    return (
         <div className={classes.sidebarr}>
          <List disablePadding dense>
            {items.map((sidebarItem, index) => (
              <React.Fragment key={`${sidebarItem.name}${index}`}>
                {sidebarItem === "divider" ? (
                  <Divider style={{ margin: "6px 0" }} />
                ) : (
                  <SidebarItem
                    className={classes.fontSizeFilterbar}
                    depthStep={depthStep}
                    depth={depth}
                    expanded={expanded}
                    item={sidebarItem}
                  />
                )}
              </React.Fragment>
            ))}
          </List>
        </div>
    )
}

export default FilterBoxSidebar