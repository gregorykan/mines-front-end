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
			url: "https://cryptic-temple-4030.herokuapp.com/new_game",
			method: "GET"
		}).done(function(data, status)
		{
			console.log(status); // test data
			//server creates new board - JS renders new board on screenß
		});
}

Board.prototype.CellClick = function (cell)
{
	var $id = $(cell).attr("id");
	var coords = $id.split('')
	var coords = { "coords": {
		"row": coords[2],
		"column": coords[6]
	}}
	console.log(coords);
	// 	ajax request not yet filled in, need URI from board server
	// var mockResponse = Math.floor(Math.random() * 11) -1;
		$.ajax({
				url: "https://cryptic-temple-4030.herokuapp.com/check",
				method: "POST",
				contentType: "application/json",
				dataType: "JSON",
				data: coords,
				success: function(data, status) {
					console.log(status);
					console.log(data);
					this.renderCell(coords, data);
				}

				// beforeSend: setHeader
			});

	function setHeader(xhr) {
  	token = '';
  	xhr.setRequestHeader('Authorization', token);
	}
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
		$('.cell').off('click');
    $( "#lose" ).dialog();
		// unbind cellclick so user cant do anything
	}
	else if (value === 0)
	{
		$thisDiv.addClass("empty");
	}
	else if (value === 9)
	{
		$thisDiv.addClass("win")
		$( "#win" ).dialog();
	}
}



