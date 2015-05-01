function Board ()
{
	this.sideLength = 10;
}

Board.prototype.RenderInitialBoard = function ()
{
	for (var r = 0; r < this.sideLength; r++)
	{
		for (var c = 0; c < this.sideLength; c++)
		{
			$('.board').append('<div class="cell" id="r_' + r + '-c_' + c +'"></div>');
		}
	}

}

Board.prototype.NewGameClick = function ()
{
	console.log("button clicked");
	// ajax request not yet filled in, need URI from board server
	$.ajax(
		{
			url: "/test",
			method: "GET"
		}).done(function(data)
		{
			console.log(data); // test data
			//server creates new board - JS renders new board on screenß
		});
}

Board.prototype.CellClick = function (cell)
{
	console.log(this);
	var $id = $(cell).attr("id");
	console.log($id);
	var coords = $id.split('')
	var coords = {
		"row": coords[2],
		"column": coords[6]
	}
	console.log(coords);
		// ajax request not yet filled in, need URI from board server
	var mockResponse = Math.floor(Math.random() * 10);
		$.ajax(
			{
				url: "http://192.168.1.125:9393/test",
				method: "POST",
				dataType: "JSON",
				data: coords
			}).done(function(data)
			{
				console.log(data);
				// this.renderCell(coords, mockResponse);
		});
}


Board.prototype.renderCell = function (coords, value)
{
	var row = coords["row"]
	var column = coords["column"]
	var $thisDiv = $('#r_' + row + '-c_' + column);
	if (value === 1)
	{
		$thisDiv.addClass("one");
	}
	else if (value === 2)
	{
		$thisDiv.addClass("two");
	}
	else if (value === 3)
	{
		$thisDiv.addClass("three");
	}
	else if (value === 4)
	{
		$thisDiv.addClass("four");
	}
	else if (value === 5)
	{
		$thisDiv.addClass("five");
	}
	else if (value === 6)
	{
		$thisDiv.addClass("six");
	}
	else if (value === 7)
	{
		$thisDiv.addClass("seven");
	}
	else if (value === 8)
	{
		$thisDiv.addClass("eight");
	}
	else if (value === -1)
	{
		$thisDiv.addClass("bomb");
	}
	else if (value === 0)
	{
		$thisDiv.addClass("empty");
	}
	else if (value === 9)
	{
		$thisDiv.addClass("win")
	}
}



