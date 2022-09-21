function createElement(tagName, object = {}) {
    let element = document.createElement(tagName);
    Object.keys(object).forEach((attr) =>
      element.setAttribute(attr, object[attr])
    );
  
    return element;
  }
  function getParent(element, strParent) {
    let    char = strParent[0];
        let compare;
    
    switch(char){
      case ".": compare=compareClass;
      strParent=strParent.slice(1);
      break;
    
      case "#":compare=compareID;
      strParent=strParent.slice(1);
      break;
    
      default : compare=compareTagName;
    }
    
    
    while(!compare(element,strParent))element=element.parentElement;
    return element;
    
    function compareClass(element,str){
      if(element.tagName=="HTML")return true;
      return element.classList.contains(str);
    }
    
    function compareID(element,str){
      if(element.tagName=="HTML")return true;
    
      return element.id==str;
    }
    
    function compareTagName(element,str){
      if(element.tagName=="HTML")return true;
    
      return
      element.tagName.toLowerCase()==str.toLowerCase();
    }
    }