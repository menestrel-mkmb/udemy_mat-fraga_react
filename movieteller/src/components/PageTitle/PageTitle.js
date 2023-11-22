function PageTitle(props) {
    const title = props.title;
    const page = props.page;

    return(<h2 className={`${page}__title page__title`}>
        {title}
    </h2>)
}

export default PageTitle;