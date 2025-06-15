/**
 * アプリケーション初期データ定義
 *
 * このモジュールはアプリケーション起動時に使用される
 * ページ、アイデア、TODOの初期データを提供します。
 */
import type { Page, Idea, Todo } from "@/types";

// サイドバーに表示されるページの初期データ
// 各ページはカテゴリ別にコンテンツをフィルタリングする役割を持つ
export const INITIAL_PAGES: Page[] = [
  {
    id: "1",
    title: "全般",
    isActive: true,
    category: "general",
    emoji: "✅",
  },
  {
    id: "2",
    title: "メインプロジェクト",
    isActive: false,
    category: "work",
    emoji: "💼",
  },
  {
    id: "3",
    title: "学習",
    isActive: false,
    category: "learning",
    emoji: "🎓",
  },
  {
    id: "4",
    title: "生活面（プライベート）",
    isActive: false,
    category: "personal",
    emoji: "🏠",
  },
];

// デモ用のアイデア初期データ
// 実際の運用では空配列または外部データソースから読み込む
export const INITIAL_IDEAS: Idea[] = [
  {
    id: "1",
    text: "個人ポートフォリオサイトを構築する",
    createdAt: new Date("2025-05-15"),
    category: "general",
  },
  {
    id: "2",
    text: "React の状態管理を記事の記事読む",
    createdAt: new Date("2025-05-16"),
    category: "work",
  },
  {
    id: "3",
    text: "個人開発の開発計画を立てる",
    createdAt: new Date("2025-05-17"),
    category: "work",
  },
  {
    id: "4",
    text: "週末旅行を計画する",
    createdAt: new Date("2025-05-18"),
    category: "personal",
  },
];

// デモ用のTODO初期データ
// 様々なステータスとカテゴリのサンプルを含む
export const INITIAL_TODOS: Todo[] = [
  {
    id: "1",
    title: "デザインシステムの調査",
    description:
      "## 概要\n現代的なデザインシステムとコンポーネントライブラリを調査\n\n## 目的\nデザインシステムとコンポーネントライブラリを調査し、最適なものを選定する\n\n## 方法\n- 現代的なデザインシステムとコンポーネントライブラリを調査\n- 調査結果をまとめる",
    completed: false,
    createdAt: new Date("2025-05-15"),
    updatedAt: new Date("2025-05-15"),
    category: "work",
  },
  {
    id: "2",
    title: "開発環境のセットアップ",
    description: "必要なツールをインストールし、ワークスペースを設定",
    completed: true,
    createdAt: new Date("2025-05-14"),
    updatedAt: new Date("2025-05-16"),
    category: "work",
  },
  {
    id: "3",
    title: "ワイヤーフレームの作成",
    description: "アプリケーションの初期ワイヤーフレームを設計",
    completed: false,
    createdAt: new Date("2025-05-16"),
    updatedAt: new Date("2025-05-16"),
    category: "work",
  },
  {
    id: "4",
    title: "1週間の食事の計画",
    description: "1週間の食事の計画を立てる",
    completed: false,
    createdAt: new Date("2025-05-17"),
    updatedAt: new Date("2025-05-17"),
    category: "personal",
  },
  {
    id: "5",
    title: "React Hooksの記事を書く",
    description: "React Hooksの学習をまとめる記事を書く",
    completed: true,
    createdAt: new Date("2025-05-12"),
    updatedAt: new Date("2025-05-15"),
    category: "learning",
  },
  {
    id: "6",
    title: "プロジェクト提案書のレビュー",
    description: "新しいクライアントの提案書をチェック",
    completed: false,
    createdAt: new Date("2025-05-18"),
    updatedAt: new Date("2025-05-18"),
    category: "general",
  },
];
