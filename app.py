import dash
import dash_html_components as html

import music_component

app = dash.Dash(__name__)

app.layout = html.Div([
    music_component.MusicComponent(),

    html.Div(id='output')
])

if __name__ == '__main__':
    # for deployment
    app.run_server(host='0.0.0.0', port=8080, debug=False, use_reloader=False)

    # for production
    # app.run_server(debug=True)
