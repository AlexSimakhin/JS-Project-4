const Path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ASSET_PATH = process.env.ASSET_PATH || '';

module.exports = {
  entry: {
    index: Path.resolve(__dirname, '../src/pages/index/scripts/index.js'),
    signUp: Path.resolve(__dirname, '../src/pages/signUp/scripts/index.js'),
    dashboard: Path.resolve(__dirname, '../src/pages/dashboard/scripts/index.js'),
    leads: Path.resolve(__dirname, '../src/pages/leads/scripts/index.js'),
    chat: Path.resolve(__dirname, '../src/pages/chat/scripts/index.js'),
    clients: Path.resolve(__dirname, '../src/pages/clients/scripts/index.js'),
    staff: Path.resolve(__dirname, '../src/pages/staff/scripts/index.js'),
    addClient: Path.resolve(__dirname, '../src/pages/addClient/scripts/index.js'),
    addLead: Path.resolve(__dirname, '../src/pages/addLead/scripts/index.js'),
    settings: Path.resolve(__dirname, '../src/pages/settings/scripts/index.js'),
    settingsAvatar: Path.resolve(__dirname, '../src/pages/settingsAvatar/scripts/index.js'),
    settingsProfile: Path.resolve(__dirname, '../src/pages/settingsProfile/scripts/index.js'),
    settingsTags: Path.resolve(__dirname, '../src/pages/settingsTags/scripts/index.js'),
  },
  output: {
    path: Path.join(__dirname, '../build'),
    filename: 'js/[name].js',
    publicPath: ASSET_PATH,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false,
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [{ from: Path.resolve(__dirname, '../public'), to: '.' }],
    }),
    new HtmlWebpackPlugin({
      chunks: ['index'],
      filename: 'index.html',
      template: Path.resolve(__dirname, '../src/pages/index/index.html'),
    }),
    new HtmlWebpackPlugin({
      chunks: ['signUp'],
      filename: 'sign-up.html',
      template: Path.resolve(__dirname, '../src/pages/signUp/index.html'),
    }),
    new HtmlWebpackPlugin({
      chunks: ['dashboard'],
      filename: 'dashboard.html',
      template: Path.resolve(__dirname, '../src/pages/dashboard/index.html'),
    }),
    new HtmlWebpackPlugin({
      chunks: ['leads'],
      filename: 'leads.html',
      template: Path.resolve(__dirname, '../src/pages/leads/index.html'),
    }),
    new HtmlWebpackPlugin({
      chunks: ['chat'],
      filename: 'chat.html',
      template: Path.resolve(__dirname, '../src/pages/chat/index.html'),
    }),
    new HtmlWebpackPlugin({
      chunks: ['clients'],
      filename: 'clients.html',
      template: Path.resolve(__dirname, '../src/pages/clients/index.html'),
    }),
    new HtmlWebpackPlugin({
      chunks: ['staff'],
      filename: 'staff.html',
      template: Path.resolve(__dirname, '../src/pages/staff/index.html'),
    }),
    new HtmlWebpackPlugin({
      chunks: ['addClient'],
      filename: 'add-client.html',
      template: Path.resolve(__dirname, '../src/pages/addClient/index.html'),
    }),
    new HtmlWebpackPlugin({
      chunks: ['addLead'],
      filename: 'add-lead.html',
      template: Path.resolve(__dirname, '../src/pages/addLead/index.html'),
    }),
    new HtmlWebpackPlugin({
      chunks: ['settings'],
      filename: 'settings.html',
      template: Path.resolve(__dirname, '../src/pages/settings/index.html'),
    }),
    new HtmlWebpackPlugin({
      chunks: ['settingsAvatar'],
      filename: 'settings-avatar.html',
      template: Path.resolve(__dirname, '../src/pages/settingsAvatar/index.html'),
    }),
    new HtmlWebpackPlugin({
      chunks: ['settingsProfile'],
      filename: 'settings-profile.html',
      template: Path.resolve(__dirname, '../src/pages/settingsProfile/index.html'),
    }),
    new HtmlWebpackPlugin({
      chunks: ['settingsTags'],
      filename: 'settings-tags.html',
      template: Path.resolve(__dirname, '../src/pages/settingsTags/index.html'),
    }),
  ],
  resolve: {
    alias: {
      '~': Path.resolve(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
      },
    ],
  },
};
