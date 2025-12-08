<script>

</script>
  <footer class="footer">
        <nav class="footer__nav">
            <a href="/faq" class="footer__navlink">FAQ</a>
            <a href="/contact" class="footer__navlink">Contact us</a>
            <a href="/privacy-policy" class="footer__navlink">Privacy policy</a>
            <a href="/terms" class="footer__navlink">Terms of use</a>
            <a href="company" class="footer__navlink">Company details</a>
        </nav>
        <p class="footer__copyright">© 2025 Taiwan Journey, inc - All rights reserved</p>
    </footer>
<style>

footer {
        background-color: var(--main-theme-color);
        color: var(--light-color);
    }

.footer__nav {
    display: flex;
    justify-content: center;
    gap: 5rem;
    padding: var(--base-padding);
    width: 100%;
}

.footer__navlink {
    position: relative;
    display: inline-flex;
    text-decoration: none;
    color: var(--light-color);
    padding: var(--base-padding);
}

.footer__navlink::after {
    content: ""; 
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: var(--light-color);
    border-radius: 3px;

    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.2s ease;
}

.footer__navlink:hover::after {
    transform: scaleX(1);
}

.footer__copyright {
    display: flex;
    justify-content: center;
    padding: var(--base-padding);
    font-style: italic;
}

</style>