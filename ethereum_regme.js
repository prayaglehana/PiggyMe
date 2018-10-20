
	   	if (typeof web3 !== 'undefined') {
            web3 = new Web3(web3.currentProvider);
        } else {
            console.log('localhostconnect');
            // set the provider you want from Web3.providers
            web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
        }
        
      
    
        
    
        var rouletteContract = web3.eth.contract ([{"constant":false,"inputs":[],"name":"Fire","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"registerMe","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"transferFunds","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":true,"inputs":[],"name":"currentRound","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"dead","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"person1","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"person2","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"regTill","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"Turn","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"winner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"x","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"}]);
        //helo
        var roulette = rouletteContract.at('0x4daa3c1b6960a97023e211bc52ea35f124c1f068');
        
    
        var person1_add;
        var person2_add;
        var owner;

        console.log(roulette);
      
        $("#status").html('Opponent is not found yet Please Wait');
        
      //  roulette.registerMe({from: web3.eth.accounts[1], gas: 3000000, value: web3.toWei('1', 'ether')}, function(err, res){});
      //  roulette.registerMe({from: web3.eth.accounts[2], gas: 3000000, value: web3.toWei('1', 'ether')}, function(err, res){});
     
      roulette.owner(function(error, result){
        if(!error)
            {
                owner=result;
                web3.eth.defaultAccount =owner;
                $("#owner").html(result);
    
                
            }
        else
            console.error(error);
    });

    $("#regme").click(function(){
        console.log('you are being registered');
        roulette.registerMe({from: web3.eth.accounts[0], gas: 3000000, value: web3.toWei('1', 'ether')}, function(err, res){});
        console.log('you sent from'+web3.eth.accounts[0]+'to'+web3.eth.defaultAccount);
    });

    
    $("#start").click(function(){
      console.log('yo');
       								
        roulette.regTill.call(function(err, res){	
            var totalPeople=parseInt(String(res), 10);
            console.log(totalPeople);	
           if(totalPeople>1)
                    {console.log('helo');
                    window.location.href = "RECOVER_full_animation_copy.html";}
        else{
            $("#status").html('Opponent is not found yet Please Wait');
        }});
  });
