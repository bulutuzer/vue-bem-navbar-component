

			//increase quantity number
			$.increment_quantity = function(cart_id, price) {
				var inputQuantityElement = $("#input-quantity-"+cart_id);
				var newQuantity = parseInt($(inputQuantityElement).val())+1;
				var newPrice = newQuantity * price;
				$(inputQuantityElement).val(newQuantity);
				update_basket_to_db(cart_id, newQuantity, newPrice);
			}

			//decrease the number of quantity
			$.decrement_quantity = function(cart_id, price) {
				var inputQuantityElement = $("#input-quantity-"+cart_id);
				if($(inputQuantityElement).val() > 1) 
				{
					var newQuantity = parseInt($(inputQuantityElement).val()) - 1;
					var newPrice = newQuantity * price;
					$(inputQuantityElement).val(newQuantity);
					update_basket_to_db(cart_id, newQuantity, newPrice);
				}
			}

			//update basket items to db
			function update_basket_to_db(cart_id, new_quantity, newPrice) {
				var inputQuantityElement = $("#input-quantity-"+cart_id);
				var priceElement = $("#cart-price-"+cart_id);

				/*$.ajax({
					url : "",
					data : "",
					type : 'post',
					success : function(response) {
						updateBasket(cart_id);
					}
				});*/

				updateBasket(cart_id, newPrice);
			}