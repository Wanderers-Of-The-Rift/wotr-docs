// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="index.html">Introduction</a></li><li class="chapter-item expanded "><a href="contribute.html">How to contribute</a></li><li class="chapter-item expanded "><div>Project Team</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="project-team/pmresponsibilities.html">PM Responsibilities</a></li><li class="chapter-item expanded "><a href="project-team/coordinator-responsibilities.html">Coordinator Responsibilities</a></li></ol></li><li class="chapter-item expanded "><a href="mvp.html">Minimum Viable Product (MVP)</a></li><li class="chapter-item expanded "><a href="design/DesignDocHome.html">Mod(Pack) Design</a></li><li class="chapter-item expanded "><div>Design</div></li><li><ol class="section"><li class="chapter-item expanded "><div>OUR DESIGN TOPICS HERE</div></li></ol></li><li class="chapter-item expanded "><a href="code/index.html">Code</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="code/style/style.html">Style</a></li><li class="chapter-item expanded "><a href="code/datapack/datapack-formats.html">Datapack Formats</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="code/datapack/format/modifiers.html">Modifiers</a></li><li class="chapter-item expanded "><a href="code/datapack/format/runegems.html">Runegems</a></li></ol></li><li class="chapter-item expanded "><a href="code/decisions/decisions.html">Decisions</a></li><li class="chapter-item expanded "><a href="code/design/design-implementation.html">Design Implementations</a></li></ol></li><li class="chapter-item expanded "><div>Art</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="art/style-guide/index.html">Style Guide</a></li></ol></li><li class="chapter-item expanded "><div>Builds</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="builds/standards.html">Standards</a></li><li class="chapter-item expanded "><a href="builds/processors.html">Processors</a></li><li class="chapter-item expanded "><a href="builds/tutorial.html">Tutorial</a></li></ol></li><li class="chapter-item expanded "><div>Resources</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="resources/tools/index.html">Tools</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="resources/tools/palette-swapper.html">Palette Swapper</a></li></ol></li><li class="chapter-item expanded "><a href="resources/mod-development.html">Mod Development</a></li></ol></li><li class="chapter-item expanded "><a href="glossary.html">Glossary</a></li><li class="chapter-item expanded "><a href="polls/polls.html">Polls</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="polls/durability.html">Durability</a></li><li class="chapter-item expanded "><a href="polls/enchanting.html">Enchanting</a></li><li class="chapter-item expanded "><a href="polls/Wall depth Poll.html">Wall POI Depth</a></li><li class="chapter-item expanded "><a href="polls/Decorative %26 Building Block Mods Poll.html">Builders Mods</a></li><li class="chapter-item expanded "><a href="polls/Stairs Poll.html">Stairs</a></li></ol></li><li class="chapter-item expanded "><div>Meeting Notes</div></li><li><ol class="section"><li class="chapter-item expanded "><div>General Meetings</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="meetings/2025-Jun-14-General-Meeting-Notes.html">Jun-14-2025 Community Meeting</a></li><li class="chapter-item expanded "><a href="meetings/2025-Jun-07-General-Meeting-Notes.html">Jun-07-2025 Community Meeting</a></li><li class="chapter-item expanded "><a href="meetings/2025-May-31-General-Meeting-Notes.html">May-31-2025 Community Meeting</a></li><li class="chapter-item expanded "><a href="meetings/2025-May-24-General-Meeting-Notes.html">May-24-2025 Community Meeting</a></li><li class="chapter-item expanded "><a href="meetings/2025-May-17-General-Meeting-Notes.html">May-17-2025 Community Meeting</a></li><li class="chapter-item expanded "><a href="meetings/2025-May-10-General-Meeting-Notes.html">May-10-2025 Community Meeting</a></li><li class="chapter-item expanded "><a href="meetings/2025-May-03-General-Meeting-Notes.html">May-03-2025 Community Meeting</a></li><li class="chapter-item expanded "><a href="meetings/2025-Apr-26-General-Meeting-Notes.html">Apr-26-2025 Community Meeting</a></li><li class="chapter-item expanded "><a href="meetings/2025-Apr-19-General-Meeting-Notes.html">Apr-19-2025 Community Meeting</a></li><li class="chapter-item expanded "><a href="meetings/2025-Apr-12-General-Meeting-Notes.html">Apr-12-2025 Community Meeting</a></li><li class="chapter-item expanded "><a href="meetings/2025-Apr-05-General-Meeting-Notes.html">Apr-05-2025 Community Meeting</a></li><li class="chapter-item expanded "><a href="meetings/2025-Mar-29-General-Meeting-Notes.html">Mar-29-2025 Community Meeting</a></li><li class="chapter-item expanded "><a href="meetings/2025-Mar-22-General-Meeting-Notes.html">Mar-22-2025 Community Meeting</a></li><li class="chapter-item expanded "><a href="meetings/2025-Mar-15-General-Meeting-Notes.html">Mar-15-2025 Community Meeting</a></li><li class="chapter-item expanded "><a href="meetings/2025-Mar-08-General-Meeting-Notes.html">Mar-08-2025 Community Meeting</a></li><li class="chapter-item expanded "><a href="meetings/2025-Mar-01-General-Meeting-Notes.html">Mar-01-2025 Community Meeting</a></li><li class="chapter-item expanded "><a href="meetings/2025-Feb-22-General-Meeting-Notes.html">Feb-22-2025 Community Meeting</a></li><li class="chapter-item expanded "><a href="meetings/2025-Feb-15-General-Meeting-Notes.html">Feb-15-2025 Community Meeting</a></li><li class="chapter-item expanded "><a href="meetings/2025-Feb-08-General-Meeting-Notes.html">Feb-08-2025 Community Meeting</a></li><li class="chapter-item expanded "><a href="meetings/2025-Feb-03-Summary-Meeting-Notes.html">Feb-03-2025 Summary Meeting</a></li></ol></li><li class="chapter-item expanded "><div>PM Meetings</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="meetings/2025-May-30-PM-Coordinator-Meeting-Notes.html">May-30-2025 PM Coordinator Meeting</a></li><li class="chapter-item expanded "><a href="meetings/2025-Feb-08-PM-Meeting-Notes.html">Feb-08-2025 PM Meeting</a></li><li class="chapter-item expanded "><a href="meetings/2025-Feb-04-PM-Meeting-Notes.html">Feb-04-2025 PM Meeting</a></li></ol></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
