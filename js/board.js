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
			url: "",
			method: "",
			dataType: "",
		}).done(function(data)
		{
			//server creates new board - JS renders new board on screenß
		});
}

Board.prototype.CellClick = function ()
{
	var $id = $(this).attr("id");
	console.log($id);
	var coords = $id.split('')
	var row = coords[2]
	var column = coords[6]
	console.log(row, column);
		// ajax request not yet filled in, need URI from board server
	$.ajax(
		{
			url: "",
			method: "",
			dataType: "",
		}).done(function(data)
		{
			//RenderCell(row, column, value)
		});
}


Board.prototype.RenderCell = function (row, column, value)
{
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
	else if (value === 'lose')
	{
		$thisDiv.addClass("bomb");
	}
	else
	{
		$thisDiv.addClass("empty");
	}

	// TEMP ROUTES FOR CONNECTION


	$.ajax(
		{
			url: "/test",
			method: "POST",
			dataType: "JSON",
			data: {"test": "IT WORKS"}
		}).done(function(data)
			return data
		{

}
