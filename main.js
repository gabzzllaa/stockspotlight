chartTradingView = function(word){
  var query = word.selectionText;
  chrome.tabs.create({url: "https://www.tradingview.com/chart/?symbol=" + query});
};

chartYahooFinance = function(word){
  var query = word.selectionText;
  chrome.tabs.create({url: "https://sg.finance.yahoo.com/quote/" + query});
};

chartBarchart = function(word){
  var query = word.selectionText;
  chrome.tabs.create({url: "https://www.barchart.com/stocks/quotes/" + query});
};

/*
chrome.contextMenus.create({
  title: "Stock Spotlight",
  contexts:["selection"],
  onclick: chartTradingView
});
*/

var contextMenuItem = {
    "id": "main",
    "title": "Stock Spotlight",
    "contexts": ["selection"]
};

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.create({
    title: "TradingView",
    parentId: "main",
    id: "tradingview",
    contexts:["selection"],
    onclick: chartTradingView
});

chrome.contextMenus.create({
    title: "Yahoo Finance",
    parentId: "main",
    id: "yahoofinance",
    contexts:["selection"],
    onclick: chartYahooFinance
});

chrome.contextMenus.create({
    title: "Barchart",
    parentId: "main",
    id: "barchart",
    contexts:["selection"],
    onclick: chartBarchart
});