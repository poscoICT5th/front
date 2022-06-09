import React from 'react'

function Footer() {
    return (
        <footer class="text-center">
            <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
                <div class="max-w-2xl mx-auto space-y-6">
                    <nav
                        class="relative flex flex-wrap justify-center gap-8 p-3 text-sm font-bold border-4 border-gray rounded-xl"
                    >
                        <div
                            class="hover:opacity-75"
                            href="https://hyperui.dev"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            정승엽
                        </div>

                        <div
                            class="hover:opacity-75"
                            href="user"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            정안지
                        </div>

                        <div
                            class="hover:opacity-75"
                            href="/blog"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            조영우
                        </div>

                        <div
                            class="hover:opacity-75"
                            href="/portfolio"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            최호진
                        </div>
                    </nav>

                    <p class="max-w-lg mx-auto text-xs text-gray-500">
                        Footer
                    </p>

                    <p class="text-xs font-medium">2022.05.13 - 2022.07.27</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer