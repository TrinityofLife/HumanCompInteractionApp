 let text = "Are you sure you want to submit your order?";
          if (confirm(text) == true) {

            alert("Your order was successfully submitted"); window.location.href = "index.html";
          }
          else {
            window.location.href = "order.html";
          }
        