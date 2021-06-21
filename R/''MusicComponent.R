# AUTO GENERATED FILE - DO NOT EDIT

''MusicComponent <- function(id=NULL) {
    
    props <- list(id=id)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'MusicComponent',
        namespace = 'music_component',
        propNames = c('id'),
        package = 'musicComponent'
        )

    structure(component, class = c('dash_component', 'list'))
}
