function loadHTML(_file, _callback)
{
    var _rawFile = new XMLHttpRequest();
    _rawFile.onreadystatechange = function ()
    {
        if(_rawFile.readyState == 4 && _rawFile.status == 200)
        {
			_callback(_rawFile.responseText);
        }
    }
    _rawFile.open("GET", _file, false);
    _rawFile.send(null);
};


function getArticleInfo(_rawText)
{
    var text = _rawText.split("\n");
    var result = [];
    result["title"] = text[0].replace("title: ", "");
    result["description"] = text[1].replace("description: ", "");
    result["date"] = text[2].replace("date: ", "");
    result["article"] = _rawText.split("@start==")[1];
    
    return result;
}
