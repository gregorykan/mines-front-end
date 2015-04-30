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

		});
}

Board.prototype.CellClick = function ()
{
	var $id = $(this).attr("id");
	var coords = $id.split('')
	coords = coords[2] + ',' + coords[6]
	console.log(coords);
		// ajax request not yet filled in, need URI from board server
	$.ajax(
		{
			url: "",
			method: "",
			dataType: "",
		}).done(function(data)
		{

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
		$thisDiv.addClass("bomb");
	}
	else
	{
		$thisDiv.addClass("empty");
	}

}