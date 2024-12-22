const FIXED_ASSETS = [
  { symbol: "BTCUSDT", name: "BTC", maxLeverage: 4, safeLeverage: 2 },
  { symbol: "ETHUSDT", name: "ETH", maxLeverage: 3, safeLeverage: 1.5 },
  { symbol: "XRPUSDT", name: "XRP", maxLeverage: 3, safeLeverage: 1.5 },
  { symbol: "SOLUSDT", name: "SOL", maxLeverage: 5, safeLeverage: 2.5 },
];

const ALL_ASSETS = [
  { symbol: "BTCUSDT", name: "BTC", maxLeverage: 4, safeLeverage: 2 },
  { symbol: "ETHUSDT", name: "ETH", maxLeverage: 3, safeLeverage: 1.5 },
  { symbol: "SOLUSDT", name: "SOL", maxLeverage: 5, safeLeverage: 2.5 },
  { symbol: "MATICUSDT", name: "MATIC", maxLeverage: 3, safeLeverage: 1.5 },
  { symbol: "ADAUSDT", name: "ADA", maxLeverage: 3, safeLeverage: 1.5 },
  { symbol: "XRPUSDT", name: "XRP", maxLeverage: 3, safeLeverage: 1.5 },
  { symbol: "LTCUSDT", name: "LTC", maxLeverage: 3, safeLeverage: 1.5 },
  { symbol: "DOTUSDT", name: "DOT", maxLeverage: 3, safeLeverage: 1.5 },
  { symbol: "DOGEUSDT", name: "DOGE", maxLeverage: 3, safeLeverage: 1.5 },
  { symbol: "TRXUSDT", name: "TRX", maxLeverage: 3, safeLeverage: 1.5 },
  { symbol: "AVAXUSDT", name: "AVAX", maxLeverage: 3, safeLeverage: 1.5 },
  { symbol: "LINKUSDT", name: "LINK", maxLeverage: 3, safeLeverage: 1.5 },
  { symbol: "XLMUSDT", name: "XLM", maxLeverage: 3, safeLeverage: 1.5 },
  { symbol: "XMRUSDT", name: "XMR", maxLeverage: 3, safeLeverage: 1.5 },
  { symbol: "ATOMUSDT", name: "ATOM", maxLeverage: 3, safeLeverage: 1.5 },
  { symbol: "FILUSDT", name: "FIL", maxLeverage: 3, safeLeverage: 1.5 },
  { symbol: "ETCUSDT", name: "ETC", maxLeverage: 3, safeLeverage: 1.5 },
  { symbol: "SANDUSDT", name: "SAND", maxLeverage: 3, safeLeverage: 1.5 },
  { symbol: "NEARUSDT", name: "NEAR", maxLeverage: 3, safeLeverage: 1.5 },
  { symbol: "ALGOUSDT", name: "ALGO", maxLeverage: 3, safeLeverage: 1.5 },
  { symbol: "VETUSDT", name: "VET", maxLeverage: 3, safeLeverage: 1.5 },
  { symbol: "ICPUSDT", name: "ICP", maxLeverage: 3, safeLeverage: 1.5 },
  { symbol: "EOSUSDT", name: "EOS", maxLeverage: 3, safeLeverage: 1.5 },
  { symbol: "XTZUSDT", name: "XTZ", maxLeverage: 3, safeLeverage: 1.5 },
  { symbol: "APEUSDT", name: "APE", maxLeverage: 3, safeLeverage: 1.5 },
  { symbol: "MANAUSDT", name: "MANA", maxLeverage: 3, safeLeverage: 1.5 },
  { symbol: "AXSUSDT", name: "AXS", maxLeverage: 3, safeLeverage: 1.5 },
  { symbol: "FLOWUSDT", name: "FLOW", maxLeverage: 3, safeLeverage: 1.5 },
  { symbol: "THETAUSDT", name: "THETA", maxLeverage: 3, safeLeverage: 1.5 },
];

const NUM_RANDOM_ASSETS = 21;
const DAYS = 30;
const SHORT_SMA = 7;
const LONG_SMA = 25;
const RSI_PERIOD = 14;
const RSI_OVERBOUGHT = 70;
const RSI_OVERSOLD = 30;
const STOP_LOSS_PERCENT = 0.05;
const UPDATE_INTERVAL = 5 * 60 * 1000; // 5 minutos em milissegundos
const MACD_FAST_PERIOD = 12;
const MACD_SLOW_PERIOD = 26;
const MACD_SIGNAL_PERIOD = 9;

const ASSET_LOGOS = {
  BTC: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
  ETH: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
  SOL: "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png",
  XRP: "https://s2.coinmarketcap.com/static/img/coins/64x64/52.png",
  SUPRA: "https://s2.coinmarketcap.com/static/img/coins/64x64/28702.png",
  MATIC: "https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png",
  ADA: "https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png",
  LTC: "https://s2.coinmarketcap.com/static/img/coins/64x64/2.png",
  DOT: "https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png",
  DOGE: "https://s2.coinmarketcap.com/static/img/coins/64x64/74.png",
  TRX: "https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png",
  AVAX: "https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png",
  LINK: "https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png",
  XLM: "https://s2.coinmarketcap.com/static/img/coins/64x64/512.png",
  XMR: "https://s2.coinmarketcap.com/static/img/coins/64x64/328.png",
  ATOM: "https://s2.coinmarketcap.com/static/img/coins/64x64/3794.png",
  FIL: "https://s2.coinmarketcap.com/static/img/coins/64x64/2280.png",
  ETC: "https://s2.coinmarketcap.com/static/img/coins/64x64/1321.png",
  SAND: "https://s2.coinmarketcap.com/static/img/coins/64x64/6210.png",
  NEAR: "https://s2.coinmarketcap.com/static/img/coins/64x64/6719.png",
  ALGO: "https://s2.coinmarketcap.com/static/img/coins/64x64/4030.png",
  VET: "https://s2.coinmarketcap.com/static/img/coins/64x64/3077.png",
  ICP: "https://s2.coinmarketcap.com/static/img/coins/64x64/8916.png",
  EOS: "https://s2.coinmarketcap.com/static/img/coins/64x64/1765.png",
  XTZ: "https://s2.coinmarketcap.com/static/img/coins/64x64/2011.png",
  APE: "https://s2.coinmarketcap.com/static/img/coins/64x64/18880.png",
  MANA: "https://s2.coinmarketcap.com/static/img/coins/64x64/1966.png",
  AXS: "https://s2.coinmarketcap.com/static/img/coins/64x64/6783.png",
  FLOW: "https://s2.coinmarketcap.com/static/img/coins/64x64/6783.png",
  THETA: "https://s2.coinmarketcap.com/static/img/coins/64x64/2416.png",
};
// Função para buscar os dados da Binance
async function fetchData(symbol, interval = "1d", limit = DAYS) {
  const url = `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=${limit}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Falha ao obter dados para ${symbol} (Status: ${response.status})`
      );
    }
    const data = await response.json();
    return data.map((kline) => ({
      time: kline[0],
      open: parseFloat(kline[1]),
      high: parseFloat(kline[2]),
      low: parseFloat(kline[3]),
      close: parseFloat(kline[4]),
      volume: parseFloat(kline[5]),
    }));
  } catch (error) {
    console.error(`Erro ao buscar dados de ${symbol}:`, error);
    return null;
  }
}

// Função para calcular a SMA
function calculateSMA(prices, period) {
  if (!prices || prices.length < period) return null;
  const sliced = prices.slice(-period);
  const sum = sliced.reduce((acc, p) => acc + p.close, 0);
  return sum / period;
}

// Função para calcular o EMA
function calculateEMA(prices, period) {
  if (!prices || prices.length < period + 1) return null;
  const alpha = 2 / (period + 1);
  let ema = prices[0];
  const emaValues = [ema];
  for (let i = 1; i < prices.length; i++) {
    ema = alpha * prices[i] + (1 - alpha) * ema;
    emaValues.push(ema);
  }
  return emaValues;
}

// Função para calcular o MACD
function calculateMACD(prices) {
  if (!prices || prices.length < MACD_SLOW_PERIOD) return null;

  const ema12 = calculateEMA(
    prices.map((p) => p.close),
    MACD_FAST_PERIOD
  );
  const ema26 = calculateEMA(
    prices.map((p) => p.close),
    MACD_SLOW_PERIOD
  );

  if (!ema12 || !ema26 || ema12.length === 0 || ema26.length === 0) return null;
  const macdLine = ema12.map((ema12Value, index) => ema12Value - ema26[index]);

  const signalLine = calculateEMA(macdLine, MACD_SIGNAL_PERIOD);

  const histogram = macdLine.map(
    (macdValue, index) => macdValue - (signalLine[index] || 0)
  );

  return {
    macd: macdLine.slice(-1)[0],
    signal: signalLine.slice(-1)[0],
    histogram: histogram.slice(-1)[0],
  };
}

// Função para calcular o RSI
function calculateRSI(prices, period = 14) {
  if (!prices || prices.length < period + 1) return null;

  const priceValues = prices.map((p) => p.close);
  const deltas = priceValues
    .slice(1)
    .map((current, i) => current - priceValues[i]);

  const gains = deltas.map((d) => Math.max(0, d));
  const losses = deltas.map((d) => Math.abs(Math.min(0, d)));

  const avgGain = calculateEMA(gains, period);
  const avgLoss = calculateEMA(losses, period);
  if (avgLoss[avgLoss.length - 1] === 0) return 100;
  const rs = avgGain[avgGain.length - 1] / avgLoss[avgLoss.length - 1];
  const rsi = 100 - 100 / (1 + rs);
  return rsi;
}

// Função para analisar o volume
function analyzeVolume(prices, period = 20) {
  if (!prices || prices.length < period) return null;
  const sliced = prices.slice(-period);
  const volumeValues = sliced.map((p) => p.volume);
  const avgVolume =
    volumeValues.reduce((acc, vol) => acc + vol, 0) / volumeValues.length;
  const lastVolume = sliced.slice(-1)[0].volume;
  return {
    lastVolume: lastVolume,
    avgVolume: avgVolume,
  };
}

// Função para verificar se existe eventos macro para as proximas 2 horas.
function checkMacroEvents() {
  const now = new Date();
  const twoHoursLater = new Date(now.getTime() + 2 * 60 * 60 * 1000);
  const isWeekEnd = now.getDay() === 0 || now.getDay() === 6;
  return {
    hasEvents: isWeekEnd,
    time: twoHoursLater.toLocaleTimeString(),
    now: now,
    twoHoursLater: twoHoursLater,
  };
}

// Função para obter o sinal com regras aprimoradas
function getSignal(smaShort, smaLong, rsiValue, volumeAnalysis, timeframe) {
  if (
    smaShort === null ||
    smaLong === null ||
    rsiValue === null ||
    volumeAnalysis === null
  )
    return "Dados insuficientes";

  let signal = "Neutro";

  const { lastVolume, avgVolume } = volumeAnalysis;
  if (timeframe === "4h") {
    if (smaShort > smaLong) {
      // Tendência de alta
      if (rsiValue < RSI_OVERSOLD) {
        signal = "Sinal de Compra (4h)";
      } else if (rsiValue >= RSI_OVERSOLD && rsiValue <= RSI_OVERBOUGHT) {
        signal = "Manter Posição Comprada (4h)";
      } else if (rsiValue > RSI_OVERBOUGHT) {
        signal = "Cautela (Possível sobrecompra) (4h)";
      }
    } else if (smaShort < smaLong) {
      // Tendência de baixa
      if (rsiValue > RSI_OVERBOUGHT) {
        signal = "Sinal de Venda (4h)";
      } else if (rsiValue >= RSI_OVERSOLD && rsiValue <= RSI_OVERBOUGHT) {
        signal = "Manter Posição Vendida (4h)";
      } else if (rsiValue < RSI_OVERSOLD) {
        signal = "Cautela (Possível sobrevenda) (4h)";
      }
    }
  } else if (timeframe === "1h") {
    if (smaShort > smaLong) {
      // Tendência de alta
      if (rsiValue < RSI_OVERSOLD && lastVolume > avgVolume) {
        signal = "Sinal de Compra";
      } else if (
        rsiValue >= RSI_OVERSOLD &&
        rsiValue <= RSI_OVERBOUGHT &&
        lastVolume > avgVolume
      ) {
        signal = "Manter Posição Comprada";
      } else if (rsiValue > RSI_OVERBOUGHT && lastVolume < avgVolume) {
        signal = "Cautela (Possível sobrecompra)";
      }
    } else if (smaShort < smaLong) {
      // Tendência de baixa
      if (rsiValue > RSI_OVERBOUGHT && lastVolume > avgVolume) {
        signal = "Sinal de Venda";
      } else if (
        rsiValue >= RSI_OVERSOLD &&
        rsiValue <= RSI_OVERBOUGHT &&
        lastVolume > avgVolume
      ) {
        signal = "Manter Posição Vendida";
      } else if (rsiValue < RSI_OVERSOLD && lastVolume < avgVolume) {
        signal = "Cautela (Possível sobrevenda)";
      }
    }
  }
  return signal;
}

function calculateStopLoss(price, smaLong) {
  if (price === null || smaLong === null) return "N/A";
  if (price < smaLong * (1 - STOP_LOSS_PERCENT)) {
    return "Stop Loss";
  }
  return "N/A";
}

// Função para calcular a alavancagem dinamicamente
function calculateLeverage(asset, signal1h, signal4h, rsi1h, rsi4h) {
  let leverage = asset.safeLeverage;
  if (
    (signal1h === "Sinal de Compra" ||
      signal1h === "Manter Posição Comprada") &&
    (signal4h === "Sinal de Compra (4h)" ||
      signal4h === "Manter Posição Comprada (4h)")
  ) {
    if (rsi1h >= 30 && rsi1h <= 70 && rsi4h >= 30 && rsi4h <= 70) {
      leverage = asset.maxLeverage;
    }
  } else if (
    (signal1h === "Sinal de Venda" || signal1h === "Manter Posição Vendida") &&
    (signal4h === "Sinal de Venda (4h)" ||
      signal4h === "Manter Posição Vendida (4h)")
  ) {
    if (rsi1h >= 30 && rsi1h <= 70 && rsi4h >= 30 && rsi4h <= 70) {
      leverage = asset.maxLeverage;
    }
  }

  return leverage;
}

// Função para verificar se o mercado mudou de direção rapidamente
function checkMarketChange(oldSignal, newSignal) {
  const buySignals = ["Sinal de Compra", "Manter Posição Comprada"];
  const sellSignals = ["Sinal de Venda", "Manter Posição Vendida"];
  if (!oldSignal || !newSignal) return "N/A";
  if (buySignals.includes(oldSignal) && sellSignals.includes(newSignal)) {
    return "Alerta: Fechar Posição (Mudança Rápida do Mercado)";
  } else if (
    sellSignals.includes(oldSignal) &&
    buySignals.includes(newSignal)
  ) {
    return "Alerta: Fechar Posição (Mudança Rápida do Mercado)";
  }
  return "N/A";
}
// Função para criar o card do ativo
function createAssetCard(
  asset,
  price,
  smaShort1h,
  smaLong1h,
  rsiValue1h,
  signal1h,
  smaShort4h,
  smaLong4h,
  rsiValue4h,
  signal4h,
  stopLossValue,
  marketChangeAlert,
  chart5mContainer,
  leverage
) {
  const assetCard = document.createElement("div");
  assetCard.classList.add("asset-card");
  const logoUrl = ASSET_LOGOS[asset.name] || "";

  assetCard.innerHTML = `
                <div>
                    <span class="card-label">Ativo:</span>
                    <span>
                       ${
                         logoUrl
                           ? `<img src="${logoUrl}" alt="${asset.name}" style="width: 24px; height: 24px; vertical-align: middle; margin-right: 5px;">`
                           : ""
                       }
                        ${asset.name}
                   </span>
                </div>
                <div>
                    <span class="card-label">Preço Atual (USD):</span>
                    <span>${price ? price.toFixed(2) : "N/A"}</span>
                </div>
                  <div>
                   <span class="card-label">SMA(7) 1H:</span>
                   <span>${smaShort1h ? smaShort1h.toFixed(2) : "N/A"}</span>
                   </div>
                   <div>
                   <span class="card-label">SMA(25) 1H:</span>
                 <span>${smaLong1h ? smaLong1h.toFixed(2) : "N/A"}</span>
                  </div>
                <div>
                 <span class="card-label">RSI(14) 1H:</span>
                 <span>${rsiValue1h ? rsiValue1h.toFixed(2) : "N/A"}</span>
               </div>
                  <div>
                   <span class="card-label">Sinal 1H:</span>
                   <span class="${
                     signal1h === "Sinal de Compra" ||
                     signal1h === "Manter Posição Comprada"
                       ? "buy"
                       : signal1h === "Sinal de Venda" ||
                         signal1h === "Manter Posição Vendida"
                       ? "sell"
                       : signal1h === "Cautela (Possível sobrecompra)" ||
                         signal1h === "Cautela (Possível sobrevenda)"
                       ? "stop-loss"
                       : "neutral"
                   }">${signal1h}</span>
                  </div>
                     <div>
                      <span class="card-label">SMA(7) 4H:</span>
                      <span>${smaShort4h ? smaShort4h.toFixed(2) : "N/A"}</span>
                    </div>
                    <div>
                       <span class="card-label">SMA(25) 4H:</span>
                      <span>${smaLong4h ? smaLong4h.toFixed(2) : "N/A"}</span>
                  </div>
                  <div>
                    <span class="card-label">RSI(14) 4H:</span>
                     <span>${rsiValue4h ? rsiValue4h.toFixed(2) : "N/A"}</span>
                  </div>
                  <div>
                     <span class="card-label">Sinal 4H:</span>
                     <span class="${
                       signal4h === "Sinal de Compra (4h)" ||
                       signal4h === "Manter Posição Comprada (4h)"
                         ? "buy"
                         : signal4h === "Sinal de Venda (4h)" ||
                           signal4h === "Manter Posição Vendida (4h)"
                         ? "sell"
                         : signal4h === "Cautela (Possível sobrecompra) (4h)" ||
                           signal4h === "Cautela (Possível sobrevenda) (4h)"
                         ? "stop-loss"
                         : "neutral"
                     }">${signal4h}</span>
                  </div>
                   <div>
                     <span class="card-label">Leverage:</span>
                     <span>${leverage ? leverage.toFixed(1) : "N/A"}x</span>
                </div>
                <div>
                     <span class="card-label">Stop Loss:</span>
                    <span class="${
                      stopLossValue === "Stop Loss" ? "sell" : ""
                    }">${stopLossValue}</span>
                </div>
               <div>
                    <span class="card-label">Alerta:</span>
                    <span class="${
                      marketChangeAlert !== "N/A" ? "sell" : ""
                    }">${marketChangeAlert}</span>
               </div>
                <div class="chart-container-wrapper"></div>
             `;
  const chartContainerWrapper = assetCard.querySelector(
    ".chart-container-wrapper"
  );
  chartContainerWrapper.appendChild(chart5mContainer);

  return assetCard;
}

function getRandomAssets(allAssets, num, fixedAssets) {
  const filteredAssets = allAssets.filter(
    (asset) => !fixedAssets.some((fixed) => fixed.symbol === asset.symbol)
  );
  const shuffled = [...filteredAssets].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

async function createChart(container, symbol, interval) {
  try {
    const chart = LightweightCharts.createChart(container, {
      width: 250,
      height: 150,
      layout: {
        background: { color: "transparent" },
        textColor: "rgba(0, 0, 0, 0.9)",
      },
      grid: {
        vertLines: { color: "rgba(197, 203, 206, 0.1)" },
        horzLines: { color: "rgba(197, 203, 206, 0.1)" },
      },
    });

    const candleSeries = chart.addCandlestickSeries();
    const data = await fetchData(symbol, interval, 100);
    if (data) {
      candleSeries.setData(
        data.map((item) => ({
          time: item.time / 1000,
          open: item.open,
          high: item.high,
          low: item.low,
          close: item.close,
        }))
      );
    }
    return chart;
  } catch (error) {
    console.error("Erro ao criar o gráfico:", error);
    return null;
  }
}

function findAssetCard(assetName, tableBody) {
  const cards = tableBody.querySelectorAll(".asset-card");
  for (const card of cards) {
    const nameSpan = card.querySelector("div:first-child span:last-child");
    if (nameSpan && nameSpan.textContent.trim() === assetName) {
      return card;
    }
  }
  return null;
}

function generateToken() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

let currentToken = generateToken();

function updateTokenDisplay() {
  const tokenDisplay = document.getElementById("token-display");
  if (tokenDisplay) {
    tokenDisplay.textContent = currentToken;
  }
}

async function fetchTop10Futures() {
  try {
    const response = await fetch("https://api.binance.com/api/v3/ticker/24hr");
    if (!response.ok) {
      throw new Error(
        `Falha ao obter dados da Binance (Status: ${response.status})`
      );
    }
    const data = await response.json();
    const volumeData = data
      .filter((item) => item.symbol.endsWith("USDT"))
      .sort((a, b) => b.quoteVolume - a.quoteVolume)
      .slice(0, 10);
    const futuresData = await Promise.all(
      volumeData.map(async (item) => {
        const hourlyData = await fetchData(item.symbol, "1h", 2);
        if (hourlyData && hourlyData.length === 2) {
          const first = hourlyData[0];
          const second = hourlyData[1];
          const highVolume = Math.max(first.volume, second.volume);
          const lowVolume = Math.min(first.volume, second.volume);
          return {
            symbol: item.symbol,
            highVolume: highVolume,
            lowVolume: lowVolume,
            lastPrice: second.close,
          };
        }
        return {
          symbol: item.symbol,
          highVolume: null,
          lowVolume: null,
          lastPrice: null,
        };
      })
    );
    return futuresData.sort((a, b) => {
      if (a.highVolume === null || b.highVolume === null) return 0;
      return b.highVolume - a.highVolume;
    });
  } catch (error) {
    console.error("Erro ao buscar top 10 futuros:", error);
    return [];
  }
}

function createPieChart(container, highVolume, lowVolume) {
  if (!container) return;

  const canvas = document.createElement("canvas");
  container.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  if (!ctx || highVolume === null || lowVolume === null) {
    return;
  }
  const total = highVolume + lowVolume;
  const percentageHigh = (highVolume / total) * 100;
  const percentageLow = (lowVolume / total) * 100;
  new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Compra", "Venda"],
      datasets: [
        {
          label: "Volume",
          data: [percentageHigh, percentageLow],
          backgroundColor: [
            "rgba(33, 252, 4, 0.8)",
            "rgba(243, 11, 62, 0.8)",
          ],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
}

function createTop10FuturesCard(futures) {
  const top10FuturesDiv = document.getElementById("top-10-futures");
  top10FuturesDiv.innerHTML = "";
  const futuresCard = document.createElement("div");
  futuresCard.classList.add("top-10-futures-card");
  futuresCard.innerHTML = `<h2>Top 10 Alavancagem Binance Futures</h2>`;
  const futuresList = document.createElement("ul");
  futures.forEach((future) => {
    const { symbol, highVolume, lowVolume, lastPrice } = future;
    let message = "Dados insuficientes";
    if (highVolume !== null && lowVolume !== null) {
      message = highVolume > lowVolume ? "Mais Compras" : "Mais Vendas";
      message += `<br>Maior Compra: ${highVolume.toFixed(
        0
      )} <br> Maior Venda: ${lowVolume.toFixed(0)}`;
    }
    const listItem = document.createElement("li");
    const chartContainer = document.createElement("div");
    chartContainer.style.width = "60px";
    chartContainer.style.height = "60px";
    createPieChart(chartContainer, highVolume, lowVolume);
    const futureLink = `https://www.binance.com/pt-BR/futures/${symbol.replace(
      "USDT",
      "_USDT"
    )}`;
    listItem.innerHTML = `<a href="${futureLink}" target="_blank">${symbol}</a>
                                            <span>${message}</span>`;
    listItem.appendChild(chartContainer);
    futuresList.appendChild(listItem);
  });
  futuresCard.appendChild(futuresList);
  top10FuturesDiv.appendChild(futuresCard);
}

async function analyzeAssets() {
  const tableBody = document.getElementById("asset-table-body");
  const randomAssets = getRandomAssets(
    ALL_ASSETS,
    NUM_RANDOM_ASSETS,
    FIXED_ASSETS
  );
  const assetsToAnalyze = [...FIXED_ASSETS, ...randomAssets];
  const searchInput = document.getElementById("crypto-search");
  const searchTerm = searchInput.value.trim().toLowerCase();

  const previousData = {};

  // Função auxiliar para analisar os ativos e atualizar a tabela
  const processAsset = async (asset) => {
    try {
      if (searchTerm && !asset.name.toLowerCase().includes(searchTerm)) {
        const existingCard = findAssetCard(asset.name, tableBody);
        if (existingCard) {
          existingCard.style.display = "none";
        }
        return;
      }

      const chart5mContainer = document.createElement("div");
      chart5mContainer.classList.add("chart-container");
      const [prices1h, prices4h] = await Promise.all([
        fetchData(asset.symbol, "1h"),
        fetchData(asset.symbol, "4h"),
      ]);
      if (
        !prices1h ||
        !prices4h ||
        prices1h === null ||
        prices4h === null ||
        prices1h.length === 0 ||
        prices4h.length === 0
      ) {
        return; // Não criar linhas com dados insuficientes
      }
      const lastPrice = prices1h[prices1h.length - 1].close;
      const smaShort1h = calculateSMA(prices1h, SHORT_SMA);
      const smaLong1h = calculateSMA(prices1h, LONG_SMA);
      const rsiValue1h = calculateRSI(prices1h, RSI_PERIOD);
      const volumeAnalysis1h = analyzeVolume(prices1h);
      const smaShort4h = calculateSMA(prices4h, SHORT_SMA);
      const smaLong4h = calculateSMA(prices4h, LONG_SMA);
      const rsiValue4h = calculateRSI(prices4h, RSI_PERIOD);
      const signal1h = getSignal(
        smaShort1h,
        smaLong1h,
        rsiValue1h,
        volumeAnalysis1h,
        "1h"
      );
      const signal4h = getSignal(
        smaShort4h,
        smaLong4h,
        rsiValue4h,
        volumeAnalysis1h,
        "4h"
      );
      const stopLossValue = calculateStopLoss(lastPrice, smaLong1h);
      let marketChangeAlert = "N/A";

      if (previousData[asset.symbol] && previousData[asset.symbol].signal1h) {
        marketChangeAlert = checkMarketChange(
          previousData[asset.symbol].signal1h,
          signal1h
        );
      }
      const leverage = calculateLeverage(
        asset,
        signal1h,
        signal4h,
        rsiValue1h,
        rsiValue4h
      );

      const newData = {
        lastPrice: lastPrice,
        smaShort1h: smaShort1h,
        smaLong1h: smaLong1h,
        rsiValue1h: rsiValue1h,
        signal1h: signal1h,
        smaShort4h: smaShort4h,
        smaLong4h: smaLong4h,
        rsiValue4h: rsiValue4h,
        signal4h: signal4h,
        stopLossValue: stopLossValue,
        marketChangeAlert: marketChangeAlert,
        leverage: leverage,
      };

      if (
        previousData[asset.symbol] &&
        JSON.stringify(previousData[asset.symbol]) === JSON.stringify(newData)
      ) {
        const assetCard = findAssetCard(asset.name, tableBody);
        if (assetCard) {
          const chartContainer = assetCard.querySelector(
            ".chart-container-wrapper > .chart-container"
          );
          if (chartContainer)
            await createChart(chartContainer, asset.symbol, "5m");
          return;
        }
      }
      previousData[asset.symbol] = newData;
      const assetCard = createAssetCard(
        asset,
        lastPrice,
        smaShort1h,
        smaLong1h,
        rsiValue1h,
        signal1h,
        smaShort4h,
        smaLong4h,
        rsiValue4h,
        signal4h,
        stopLossValue,
        marketChangeAlert,
        chart5mContainer,
        leverage
      );
      if (findAssetCard(asset.name, tableBody)) {
        tableBody.replaceChild(assetCard, findAssetCard(asset.name, tableBody));
        const existingCard = findAssetCard(asset.name, tableBody);
        if (existingCard) {
          existingCard.style.display = "";
        }
      } else {
        tableBody.appendChild(assetCard);
        const existingCard = findAssetCard(asset.name, tableBody);
        if (existingCard) {
          existingCard.style.display = "";
        }
      }
      await createChart(chart5mContainer, asset.symbol, "5m");
    } catch (error) {
      console.error(`Erro ao processar o ativo ${asset.symbol}:`, error);
    }
  };
  // Primeiro, processa os ativos fixos
  for (const asset of FIXED_ASSETS) {
    await processAsset(asset);
  }
  // Em seguida, processa os ativos aleatórios restantes
  for (const asset of randomAssets) {
    await processAsset(asset);
  }

  const allAssets = [...FIXED_ASSETS, ...randomAssets];
  const sortedAssets = [...allAssets].sort((a, b) => {
    const rowA = findAssetCard(a.name, tableBody);
    const rowB = findAssetCard(b.name, tableBody);
    if (!rowA || !rowB) return 0;
    const aData = rowA.querySelector(
      `div:nth-child(11) span:last-child`
    ).textContent;
    const bData = rowB.querySelector(
      `div:nth-child(11) span:last-child`
    ).textContent;
    const getSignalValue = (signalText) => {
      if (signalText.includes("Sinal de Compra")) return 2;
      if (signalText.includes("Manter Posição Comprada")) return 1;
      return 0;
    };
    return getSignalValue(bData) - getSignalValue(aData);
  });
  const top4Assets = sortedAssets.slice(0, 4);
  top4Assets.forEach((asset) => {
    const row = findAssetCard(asset.name, tableBody);
    if (row) row.style.backgroundColor = "#e6ffe6";
  });
}
async function searchCoinGecko(query) {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/search?query=${query}`
    );
    if (!response.ok) {
      throw new Error(
        `Erro ao buscar dados da CoinGecko (Status: ${response.status})`
      );
    }
    return await response.json();
  } catch (error) {
    console.error("Erro na busca da CoinGecko:", error);
    return null;
  }
}

async function fetchCoinGeckoPrice(coinId) {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd`
    );
    if (!response.ok) {
      throw new Error(
        `Erro ao buscar o preço do ativo na CoinGecko (Status: ${response.status})`
      );
    }
    const data = await response.json();
    return data[coinId] ? data[coinId].usd : "N/A";
  } catch (error) {
    console.error("Erro ao buscar o preço do ativo:", error);
    return "N/A";
  }
}

function openSearchModal(results) {
  const modal = document.createElement("div");
  modal.classList.add("search-modal");
  modal.innerHTML = `
          <div class="modal-content">
                 <span class="close-button">×</span>
                 <h2>Resultados da Busca</h2>
              <div class="results-container"></div>
          </div>
        `;
  document.body.appendChild(modal);
  const resultsContainer = modal.querySelector(".results-container");
  if (results && results.coins && results.coins.length > 0) {
    results.coins.forEach(async (coin) => {
      const coinDiv = document.createElement("div");
      coinDiv.classList.add("coin-result");
      const price = await fetchCoinGeckoPrice(coin.id);
      coinDiv.innerHTML = `
                            <img src="${coin.thumb}" alt="${coin.name}" style="width: 30px; height:30px;  vertical-align: middle; margin-right: 5px; border-radius: 50%;">
                            <a href="https://www.coingecko.com/pt/coins/${coin.id}" target="_blank"> <span>${coin.name}</span></a>
                           <span> (${coin.symbol})</span>
                            <br>
                           <span style="font-size: 10px"> Preço: ${price} USD</span>

                        `;
      resultsContainer.appendChild(coinDiv);
    });
  } else {
    resultsContainer.innerHTML = "<p>Nenhum resultado encontrado.</p>";
  }
  const closeButton = modal.querySelector(".close-button");
  closeButton.addEventListener("click", () => {
    document.body.removeChild(modal);
  });
}

// Atualiza a tabela a cada 5 minutos
setInterval(async () => {
  currentToken = generateToken();
  updateTokenDisplay();
  await analyzeAssets();
  const top10Futures = await fetchTop10Futures();
  createTop10FuturesCard(top10Futures);
}, UPDATE_INTERVAL);

analyzeAssets(); // Executar a primeira vez para exibir dados iniciais
updateTokenDisplay();
fetchTop10Futures().then((top10Futures) =>
  createTop10FuturesCard(top10Futures)
); // Carrega o card de Top 10 na inicialização

const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", async () => {
  const searchInput = document.getElementById("crypto-search");
  const searchTerm = searchInput.value.trim();
  const results = await searchCoinGecko(searchTerm);
  openSearchModal(results);
});
