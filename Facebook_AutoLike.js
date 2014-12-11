var NameLike = "目標名稱";

O=document.getElementsByClassName("UFIPagerLink")
for(var i=0; i<O.length;i++)
{
    O[i].click();
}

var commit = document.getElementsByClassName("UFIList");
for(var i=0; i<commit.length; i++)
{
	var L = commit[i];
	var litag = L.getElementsByTagName("li");
	for(var j=1; j<litag.length; j++)
	{
		var spanCollect = [];
		var tagNow = litag[j];
		var spanTag = tagNow.querySelectorAll('span');
		if(spanTag!=null)
			spanCollect.push(spanTag);
		for(var x=0; x<spanCollect[0].length; x++)
		{
			try
			{
				if(spanCollect[0][x].innerHTML==NameLike)
				{
					var Liketag = tagNow.getElementsByClassName("UFILikeLink");
					Liketag[0].click();
				}
			}
			catch(e)
			{
				//Error Happened
			}
		}
	}
}
