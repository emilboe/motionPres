import './Slide05.css'

const SRC_DOC = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Transactions</title>
    <style>
      html,
      body {
        height: 100%;
        margin: 0;
        font-family: system-ui, -apple-system, sans-serif;
      }

      body {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      * {
        box-sizing: border-box;
      }

      .container {
        background: white;
        border-radius: 24px;
        padding: 16px 12px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        view-transition-name: container;
        width: 400px;
        height: fit-content;
      }

      .list-header {
        font-size: 20px;
        font-weight: 500;
        color: #18181b;
        margin-bottom: 24px;
        padding-left: 12px;
        view-transition-name: list-header;
        height: fit-content;
        overflow: hidden;
      }

      .close-button {
        display: none;
        justify-content: flex-end;
        view-transition-name: close-button;
      }

      .not-expanded {
        view-transition-class: not-expanded;
      }

      .not-expanded * {
        view-transition-class: not-expanded;
      }

      .container:has(.not-expanded) :is(.list-header, .all-transactions) {
        view-transition-class: not-expanded;
      }

      .container:has(.expanded) .list-header {
        display: none;
      }

      .container:has(.expanded) .close-button {
        display: flex;
      }

      .container:has(.expanded) .all-transactions {
        display: none;
      }

      .container:has(.expanded) .transaction:not(.expanded) {
        display: none;
      }

      .transaction-list {
        display: flex;
        flex-direction: column;
        gap: 16px;
        view-transition-name: transaction-list;
      }

      .transaction {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 0 12px;
        border-radius: 16px;
        cursor: pointer;
      }

      .transaction.expanded {
        flex-direction: column;
        align-items: flex-start;
        background: #ffffff;
      }

      .transaction.expanded .transaction-details,
      .transaction.expanded .payment-details {
        display: flex;
      }

      .transaction.expanded .icon-container {
        width: 100%;
      }

      .transaction.expanded .icon-container .close-btn {
        display: flex;
      }

      .title-container {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .icon-container {
        display: flex;
        justify-content: space-between;
      }

      .icon {
        width: 40px;
        height: 40px;
        background: #18181b;
        border-radius: 12px;
        display: grid;
        place-items: center;
      }

      .icon svg {
        width: 20px;
        height: 20px;
        color: white;
      }

      .details {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex: 1;
        width: 100%;
      }

      .title {
        font-weight: 500;
        color: #18181b;
        margin-bottom: 4px;
      }

      .subtitle {
        font-size: 14px;
        color: #71717a;
      }

      .amount {
        font-weight: 500;
        color: #71717a;
      }

      .transaction-details,
      .payment-details {
        display: none;
        flex-direction: column;
        gap: 6px;
        color: #71717a;
        border-top: 1px dotted #71717a;
        padding-top: 6px;
        width: 100%;
      }

      .transaction-details {
        view-transition-class: transaction-details;
      }

      .payment-details {
        view-transition-class: payment-details;
      }

      .all-transactions {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px;
        color: #18181b;
        font-weight: 500;
        margin-top: 8px;
        cursor: pointer;
        view-transition-name: all-transactions;
      }

      .close-btn {
        width: 32px;
        height: 32px;
        border: none;
        background: #f4f4f5;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
      }

      @keyframes slide-up {
        from {
          opacity: 0;
          margin-top: 30px;
        }
        to {
          opacity: 1;
          margin-top: 0;
        }
      }

      @keyframes fade-out {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
        100% {
          opacity: 0;
        }
      }

      ::view-transition-group(*) {
        animation-duration: 0.4s;
        animation-timing-function: cubic-bezier(0.33, 1, 0.68, 1);
      }

      ::view-transition-old(*),
      ::view-transition-new(*) {
        height: 100%;
      }

      html:active-view-transition-type(expand)
        ::view-transition-group(.transaction-details),
      html:active-view-transition-type(expand)
        ::view-transition-group(.payment-details) {
        animation-name: slide-up;
        animation-duration: 0.5s;
      }

      html:active-view-transition-type(collapse)
        ::view-transition-group(.transaction-details),
      html:active-view-transition-type(collapse)
        ::view-transition-group(.payment-details) {
        animation-name: fade-out;
      }

      ::view-transition-group(.not-expanded) {
        animation-name: fade-out;
      }
    </style>
  </head>
  <body>
    <section class="container">
      <div class="list-header">Transactions</div>
      <div class="transaction-list">
        <div class="transaction" style="view-transition-name: transaction-1">
          <div class="icon-container">
            <div class="icon" style="view-transition-name: icon-1">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M3 3h18v18H3z" stroke-width="2" />
                <path d="M9 12h6M12 9v6" stroke-width="2" stroke-linecap="round" />
              </svg>
            </div>
            <button class="close-btn" style="view-transition-name: close-btn-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor">
                <path d="M12 4L4 12M4 4l8 8" stroke-width="2" stroke-linecap="round" />
              </svg>
            </button>
          </div>
          <div class="details">
            <div class="title-container" style="view-transition-name: title-container-1">
              <div class="title">Crunchyroll</div>
              <div class="subtitle">Abonnement</div>
            </div>
            <div class="amount" style="view-transition-name: amount-1">$9.99</div>
          </div>
          <div class="transaction-details" style="view-transition-name: transaction-details-1">
            <div class="transaction-id">#67593</div>
            <div class="transaction-date">September 26</div>
            <div class="transaction-time">12:01 am</div>
          </div>
          <div class="payment-details" style="view-transition-name: payment-details-1">
            <div class="payment-method">Betalt med VISA</div>
            <div class="payment-info">XXXX 9342 VISA</div>
          </div>
        </div>
        <div class="transaction" style="view-transition-name: transaction-2">
          <div class="icon-container">
            <div class="icon" style="view-transition-name: icon-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M20 10c0 4.4-8 12-8 12s-8-7.6-8-12a8 8 0 1116 0z" stroke-width="2" />
                <circle cx="12" cy="10" r="3" stroke-width="2" />
              </svg>
            </div>
            <button class="close-btn" style="view-transition-name: close-btn-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor">
                <path d="M12 4L4 12M4 4l8 8" stroke-width="2" stroke-linecap="round" />
              </svg>
            </button>
          </div>
          <div class="details">
            <div class="title-container" style="view-transition-name: title-container-2">
              <div class="title">Flor cafe</div>
              <div class="subtitle">Boller og brus</div>
            </div>
            <div class="amount" style="view-transition-name: amount-2">44.05 NOK</div>
          </div>
          <div class="transaction-details" style="view-transition-name: transaction-details-2">
            <div class="transaction-id">#67482</div>
            <div class="transaction-date">September 24</div>
            <div class="transaction-time">05:18 pm</div>
          </div>
          <div class="payment-details" style="view-transition-name: payment-details-2">
            <div class="payment-method">Betalt med Kredittkort</div>
            <div class="payment-info">XXXX 2316 Mastercard</div>
          </div>
        </div>
        <div class="transaction" style="view-transition-name: transaction-3">
          <div class="icon-container">
            <div class="icon" style="view-transition-name: icon-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M3 3h18v18H3z" stroke-width="2" />
                <path d="M9 12h6M12 9v6" stroke-width="2" stroke-linecap="round" />
              </svg>
            </div>
            <button class="close-btn" style="view-transition-name: close-btn-3">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor">
                <path d="M12 4L4 12M4 4l8 8" stroke-width="2" stroke-linecap="round" />
              </svg>
            </button>
          </div>
          <div class="details">
            <div class="title-container" style="view-transition-name: title-container-3">
              <div class="title">Aftenposten</div>
              <div class="subtitle">Abonnement</div>
            </div>
            <div class="amount" style="view-transition-name: amount-3">-520.00 NOK</div>
          </div>
          <div class="transaction-details" style="view-transition-name: transaction-details-3">
            <div class="transaction-id">#54635</div>
            <div class="transaction-date">September 16</div>
            <div class="transaction-time">02:11 pm</div>
          </div>
          <div class="payment-details" style="view-transition-name: payment-details-3">
            <div class="payment-method">Betalt med VISA</div>
            <div class="payment-info">XXXX 9342 VISA</div>
          </div>
        </div>
        <div class="transaction" style="view-transition-name: transaction-4">
          <div class="icon-container">
            <div class="icon" style="view-transition-name: icon-4">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M3 3h18v18H3z" stroke-width="2" />
                <path d="M9 12h6M12 9v6" stroke-width="2" stroke-linecap="round" />
              </svg>
            </div>
            <button class="close-btn" style="view-transition-name: close-btn-4">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor">
                <path d="M12 4L4 12M4 4l8 8" stroke-width="2" stroke-linecap="round" />
              </svg>
            </button>
          </div>
          <div class="details">
            <div class="title-container" style="view-transition-name: title-container-4">
              <div class="title">Figma</div>
              <div class="subtitle">Abonnement</div>
            </div>
            <div class="amount" style="view-transition-name: amount-4">15.00 NOK</div>
          </div>
          <div class="transaction-details" style="view-transition-name: transaction-details-4">
            <div class="transaction-id">#52363</div>
            <div class="transaction-date">September 15</div>
            <div class="transaction-time">01:11 am</div>
          </div>
          <div class="payment-details" style="view-transition-name: payment-details-4">
            <div class="payment-method">Betalt med VISA</div>
            <div class="payment-info">XXXX 9342 VISA</div>
          </div>
        </div>
        <div class="transaction" style="view-transition-name: transaction-5">
          <div class="icon-container">
            <div class="icon" style="view-transition-name: icon-5">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M3 12h18M12 3v18" stroke-width="2" stroke-linecap="round" />
              </svg>
            </div>
            <button class="close-btn" style="view-transition-name: close-btn-5">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor">
                <path d="M12 4L4 12M4 4l8 8" stroke-width="2" stroke-linecap="round" />
              </svg>
            </button>
          </div>
          <div class="details">
            <div class="title-container" style="view-transition-name: title-container-5">
              <div class="title">Osteria Moderna</div>
              <div class="subtitle">Middag</div>
            </div>
            <div class="amount" style="view-transition-name: amount-5">42.05 NOK</div>
          </div>
          <div class="transaction-details" style="view-transition-name: transaction-details-5">
            <div class="transaction-id">#52342</div>
            <div class="transaction-date">Februar 4</div>
            <div class="transaction-time">09:06 am</div>
          </div>
          <div class="payment-details" style="view-transition-name: payment-details-5">
            <div class="payment-method">Betalt med Kredittkort</div>
            <div class="payment-info">XXXX 2316 Mastercard</div>
          </div>
        </div>
      </div>
      <div class="all-transactions">All Transactions →</div>
    </section>
    <script>
      const container = document.querySelector('.container');
      container.addEventListener('click', (e) => {
        const transaction = e.target.closest('.transaction');
        const closeBtn = e.target.closest('.close-btn');

        if (closeBtn) {
          const expandedTransaction = document.querySelector('.transaction.expanded');
          const otherTransactions = [...document.querySelectorAll('.transaction')].filter(t => t !== expandedTransaction);
          otherTransactions.forEach(t => t.classList.remove('not-expanded'));
          if (expandedTransaction) {
            document.startViewTransition({
              update: () => {
                expandedTransaction.classList.remove('expanded');
              },
              types: ['collapse']
            });
          }
          return;
        } else if (transaction) {
          if (!transaction.classList.contains('expanded')) {
            const otherTransactions = [...document.querySelectorAll('.transaction')].filter(t => t !== transaction);
            otherTransactions.forEach(t => t.classList.add('not-expanded'));
            document.startViewTransition({
              update: () => {
                transaction.classList.add('expanded');
              },
              types: ['expand']
            });
          }
        }
      });
    </script>
  </body>
</html>`;

export default function Slide05() {
  return (
    <section className="slide-layout slide05">
      <div className="speaker-line">Structural motion eksempel.</div>
      <div className="slide-header">
        <h2 className="slide-title">Strukturell motion eksempel</h2>
        <p className="slide-subtitle">
          Strukturell motion er en måte å vise hvordan elementer endrer seg når de utvider seg, bytter kontekst og viser hvor man er på vei.
        </p>
      </div>
      <iframe
        title="transaction list with view transitions"
        srcDoc={SRC_DOC}
        style={{
          width: '100%',
          height: '560px',
          border: '0',
          borderRadius: '18px',
          overflow: 'hidden',
          background: 'transparent'
        }}
        sandbox="allow-scripts allow-same-origin"
      />
    </section>
  )
}
