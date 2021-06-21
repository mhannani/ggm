import dash
import dash_html_components as html
import music_component
import os
import flask

external_stylesheets = ["https://cdnjs.cloudflare.com/ajax/libs/github-fork-ribbon-css/0.2.3/gh-fork-ribbon.min.css"]

css_directory = os.getcwd()
stylesheets = ['app.css']
static_css_route = '/assets/'

app = dash.Dash(__name__, external_stylesheets=external_stylesheets)

app.layout = html.Div([
    music_component.MusicComponent(),
    html.Div(id='output'),
    html.A(
        className="github-fork-ribbon",
        href="https://github.com/mhannani/ggm",
        title="Fork me on GitHub",
        children="Fork me on GitHub"
    )
])


@app.server.route('{}<stylesheet>'.format(static_css_route))
def serve_stylesheet(style):
    if style not in stylesheets:
        raise Exception(
            '"{}" is excluded from the allowed static files'.format(
                style
            )
        )
    return flask.send_from_directory(css_directory, style)


for stylesheet in stylesheets:
    app.css.append_css({"external_url": "/assets/{}".format(stylesheet)})

if __name__ == '__main__':
    # for deployment
    app.run_server(host='0.0.0.0', port=8080, debug=False, use_reloader=False)

    # for production
    # app.run_server(debug=True)
