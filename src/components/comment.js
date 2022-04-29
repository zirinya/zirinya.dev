import React, { useEffect } from 'react'
const Giscus = ({ mapping }) => {

    const COMMENTS_ID = 'comments-container'
    const config = {
        repo: 'zirinya/zirinya.dev',
        repoId: 'R_kgDOHPuWnA',
        category: '',
        categoryId: '',
        reactions: '1',
        metadata: '0',
        theme: 'light'
    }
    useEffect(() => {
        function LoadComments() {
            const script = document.createElement('script')
            script.src = 'https://giscus.app/client.js'
            script.setAttribute('data-repo', config.repo)
            script.setAttribute('data-repo-id', config.repositoryId)
            script.setAttribute('data-category', config.category)
            script.setAttribute('data-category-id', config.categoryId)
            script.setAttribute('data-mapping', mapping)
            script.setAttribute('data-reactions-enabled', config.reactions)
            script.setAttribute('data-emit-metadata', config.metadata)
            script.setAttribute('data-theme', config.theme)
            script.setAttribute('crossorigin', 'anonymous')
            script.async = true

            const comments = document.getElementById(COMMENTS_ID)
            if (comments) comments.appendChild(script)

            return () => {
                const comments = document.getElementById(COMMENTS_ID)
                if (comments) comments.innerHTML = ''
            }
        }
        LoadComments()
    });
    return (
        <div >
            <div className="giscus" id={COMMENTS_ID} />
        </div>
    )
}

export default Giscus